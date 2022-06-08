import {
  ApodResponse,
  APOD_API_URL,
  GetWithDateParams,
} from '@chrome-neo-plus/apod-common';

/**
 * Returns the APOD data for the given date.
 */
export async function getApodForDate(
  params: GetWithDateParams
): Promise<ApodResponse> {
  const url = new URL(params.baseUrl ?? APOD_API_URL);
  if (params.api_key) url.searchParams.append('api_key', params.api_key);
  url.searchParams.append('date', params.date);
  if (params.thumbs) url.searchParams.append('thumbs', 'true');
  const res = await fetch(url.toString());
  return res.json();
}
