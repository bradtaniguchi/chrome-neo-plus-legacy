import {
  ApodResponse,
  APOD_API_URL,
  GetWithStartAndEndDatesParams,
} from '@chrome-neo-plus/apod-common';

/**
 * Returns the APOD data for the given date-range.
 *
 * **Warning** try to not to provide a range too large, as
 * this slows down underlying API dramatically.
 */
export async function getWithStartAndEndDates(
  params: GetWithStartAndEndDatesParams
): Promise<ApodResponse[]> {
  const url = new URL(params.baseUrl ?? APOD_API_URL);
  url.searchParams.append('api_key', params.api_key);
  url.searchParams.append('start_date', params.start_date);
  if (params.end_date) url.searchParams.append('end_date', params.end_date);
  if (params.thumbs) url.searchParams.append('thumbs', 'true');
  const res = await fetch(url.toString());
  return res.json();
}
