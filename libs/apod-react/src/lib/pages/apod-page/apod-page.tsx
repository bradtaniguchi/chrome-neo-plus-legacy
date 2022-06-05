import styles from './apod-page.module.scss';

/* eslint-disable-next-line */
export interface ApodPageProps {}

export function ApodPage(props: ApodPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ApodPage!</h1>
    </div>
  );
}

export default ApodPage;
