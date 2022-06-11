import {
  ApodResponse,
  GetWithDateParams,
  isGetWithCount,
  isGetWithDate,
  isGetWithStartAndEndDates,
} from '@chrome-neo-plus/apod-common';
import { LUXON_DATE } from '@chrome-neo-plus/common';
import { https, logger, Response } from 'firebase-functions';
import got from 'got';
import { DateTime } from 'luxon';
import { APOD_API_URL } from '../constants/apod-api-url';
import { config } from '../constants/config';
import { environment } from '../environments/environment';
import { ResponseWrapper } from '../models/response-wrapper';
import { apodCache } from '../utils/apod-cache';

/**
 * The getApod function returns the Astronomy Picture of the Day.
 * @unstable
 *
 * TODO:
 *   - caching
 *   - CORS checks
 *   - retry on fails
 *   - better logging
 */
export const getApod = https.onRequest(async (request, response) => {
  const prefix = 'apod ';

  try {
    if (!environment.production) {
      logger.info(prefix + 'CORS allowed for all');
      response.set('Access-Control-Allow-Origin', '*');
    }

    if (request.method === 'OPTIONS') {
      logger.info(prefix + 'called preflight');
      response.set(
        'Access-Control-Allow-Headers',
        'authorization,content-type'
      );
      response.status(204).send('');
      return;
    }

    logger.info(prefix + 'called', { params: request.body.data });

    const params = request.body.data;

    const url = new URL(APOD_API_URL);
    url.searchParams.append('api_key', config.API_KEY);
    if (isGetWithDate(params)) {
      await handleGetWithDate({
        url,
        response,
        params,
      });
      return;
    }

    if (isGetWithCount(params)) {
      logger.info(prefix + 'get-with-count', params);
      url.searchParams.append('count', '' + params.count);
      if (params.thumbs) url.searchParams.append('thumbs', 'true');
      const res = await got.get(url.toString()).json();
      // TODO: add caching
      response.send({
        data: res,
      });
      return;
    }

    if (isGetWithStartAndEndDates(params)) {
      logger.info(prefix + 'get-with-start-and-end-dates', params);
      url.searchParams.append('start_date', params.start_date);
      if (params.end_date) url.searchParams.append('end_date', params.end_date);
      if (params.thumbs) url.searchParams.append('thumbs', 'true');
      const res = await got.get(url.toString()).json();
      // TODO: add caching
      response.send({
        data: res,
      });
    }

    logger.debug(prefix + 'unknown params provided');
    response.status(400).send({
      message: 'Unknown params provided',
    });
  } catch (err) {
    logger.error(prefix + 'error', err);
    response.status(500).send({
      error: 'Unknown Error',
    });
  }
});

/**
 * Handles the request to get the APOD for a specific date.
 */
export async function handleGetWithDate({
  url,
  response,
  params,
}: {
  url: URL;
  response: Response;
  params: GetWithDateParams;
}): Promise<void> {
  const prefix = 'apod get-with-date ';
  logger.info(prefix, params);
  const dateTime = DateTime.fromFormat(params.date, LUXON_DATE);

  if (!dateTime.isValid) {
    logger.info(prefix + 'invalid date', params.date);
    response.status(400).send({
      message: 'Invalid date provided',
    });
    return;
  }

  const date = dateTime.toFormat(LUXON_DATE);

  if (apodCache.has(date)) {
    logger.info(prefix + 'cached', date);
    const cachedApod = apodCache.get(date);
    response.send({
      data: cachedApod,
    } as ResponseWrapper<ApodResponse>);
    return;
  }

  url.searchParams.append('date', date);

  if (params.thumbs) url.searchParams.append('thumbs', 'true');

  const res = (await got.get(url.toString()).json()) as ApodResponse;

  if (res.media_type === 'image') {
    logger.info(prefix + 'caching', date);
    apodCache.set(date, res);
  }

  response.send({
    data: res,
  } as ResponseWrapper<ApodResponse>);
}
