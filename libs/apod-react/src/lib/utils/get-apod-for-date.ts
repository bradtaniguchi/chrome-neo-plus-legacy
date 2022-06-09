import { ApodResponse, GetWithDateParams } from '@chrome-neo-plus/apod-common';
import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';

const getApod = httpsCallable<GetWithDateParams, ApodResponse>(
  functions,
  'getApod'
);

/**
 * Returns the APOD data for the given date.
 */
export async function getApodForDate(
  params: GetWithDateParams
): Promise<ApodResponse> {
  return getApod(params).then(({ data }) => data);
}
