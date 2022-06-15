import { ApodResponse } from '@chrome-neo-plus/apod-common';

/**
 * The APOD cache is a simple ES6 map that can be used to cache
 * APOD responses on a date by date basis.
 */
export const apodCache = new Map<string, ApodResponse>();
