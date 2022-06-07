import { ApodResponse } from '@chrome-neo-plus/apod-common';
import Box from '@mui/material/Box';

/* eslint-disable-next-line */
export interface ApodImageProps extends Partial<ApodResponse> {
  /**
   * The size of the image, can be provided to scale
   * the image as a square.
   *
   * If not passed, then the image will scale to default. This usually
   * results in the image being very large.
   */
  size?: string;
}

/**
 * Component that renders the Astronomy Picture of the Day.
 *
 * Browse the list of images here:
 * https://www.nasa.gov/multimedia/imagegallery/iotd.html
 *
 * @see ApodImageProps
 */
export function ApodImage(props: ApodImageProps) {
  return (
    <Box
      sx={{
        width: props.size,
        height: props.size,
      }}
      component="img"
      src={props.url}
      aria-label={props.explanation}
      title={props.title}
      alt={props.title}
    />
  );
}

export default ApodImage;
