import { ApodResponse, GetWithCountParams } from '@chrome-neo-plus/apod-common';
import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';

export const getApod = httpsCallable<GetWithCountParams, ApodResponse[]>(
  functions,
  'getApod'
);

/**
 * Returns multiple APOD  for the given date range
 */
export async function getWithCount(
  params: GetWithCountParams
): Promise<ApodResponse[]> {
  return getApod(params).then(({ data }) => data);
}
