import {
  ApodResponse,
  GetWithStartAndEndDatesParams,
} from '@chrome-neo-plus/apod-common';
import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';

const getApod = httpsCallable<GetWithStartAndEndDatesParams, ApodResponse[]>(
  functions,
  'getApod'
);

/**
 * Returns the APOD data for the given date-range.
 *
 * **Warning** try to not to provide a range too large, as
 * this slows down underlying API dramatically.
 */
export async function getWithStartAndEndDates(
  params: GetWithStartAndEndDatesParams
): Promise<ApodResponse[]> {
  return getApod(params).then(({ data }) => data);
}
