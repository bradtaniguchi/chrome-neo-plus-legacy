import { ApodResponse } from '@chrome-neo-plus/apod-common';

/* eslint-disable-next-line */
export interface ApodImageProps extends ApodResponse {}

/**
 * Component that renders the Astronomy Picture of the Day.
 *
 * Browse the list of images here:
 * https://www.nasa.gov/multimedia/imagegallery/iotd.html
 *
 * @see ApodImageProps
 */
export function ApodImage(props: ApodImageProps) {
  // TODO
  return <div></div>;
}

export default ApodImage;
