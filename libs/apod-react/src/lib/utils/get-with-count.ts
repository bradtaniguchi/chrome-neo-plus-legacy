import {
  ApodResponse,
  APOD_API_URL,
  GetWithCountParams,
} from '@chrome-neo-plus/apod-common';

/**
 * Returns the APOD data for the given date.
 */
export async function getWithCount(
  params: GetWithCountParams
): Promise<ApodResponse[]> {
  const url = new URL(params.baseUrl ?? APOD_API_URL);
  if (params.api_key) url.searchParams.append('api_key', params.api_key);
  url.searchParams.append('count', '' + params.count);
  if (params.thumbs) url.searchParams.append('thumbs', 'true');
  const res = await fetch(url.toString());
  return res.json();
}
