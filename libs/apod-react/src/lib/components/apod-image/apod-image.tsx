import styles from './apod-image.module.scss';
import { ApodResponse } from '@chrome-neo-plus/apod-common';

/* eslint-disable-next-line */
export interface ApodImageProps {
  /**
   * The response from the API we are to display
   */
  res: ApodResponse;
}

export function ApodImage(props: ApodImageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ApodImage!</h1>
    </div>
  );
}

export default ApodImage;
