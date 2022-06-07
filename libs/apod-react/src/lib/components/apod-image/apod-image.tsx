import { ApodResponse } from '@chrome-neo-plus/apod-common';
import Box from '@mui/material/Box';

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
  return (
    <Box
      sx={{
        width: '50px',
        height: '50px',
      }}
      component="img"
      src={props.url}
      aria-label={props.explanation}
      alt={props.title}
    />
  );
}

export default ApodImage;
