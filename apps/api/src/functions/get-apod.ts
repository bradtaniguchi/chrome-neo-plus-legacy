import {
  ApodResponse,
  isGetWithCount,
  isGetWithDate,
  isGetWithStartAndEndDates,
} from '@chrome-neo-plus/apod-common';
import { https, logger } from 'firebase-functions';
import { APOD_API_URL } from '../constants/apod-api-url';
import { environment } from '../environments/environment';
import { ResponseWrapper } from '../models/response-wrapper';
import { getGot } from '../utils/got';

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
  const got = await getGot();
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
    url.searchParams.append('api_key', 'DEMO_KEY'); // TODO: update with environment variable
    if (isGetWithDate(params)) {
      logger.info(prefix + 'get-with-date', params);
      url.searchParams.append('date', params.date);
      if (params.thumbs) url.searchParams.append('thumbs', 'true');
      const res = await got.get(url.toString()).json();
      // TODO: add caching
      response.send({
        data: res,
      } as ResponseWrapper<ApodResponse>);
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
