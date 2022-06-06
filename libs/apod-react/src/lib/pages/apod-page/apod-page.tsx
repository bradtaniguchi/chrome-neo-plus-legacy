import { useApod } from '../../hooks';
import { DateTime } from 'luxon';
import styles from './apod-page.module.scss';
import { useMemo } from 'react';

/* eslint-disable-next-line */
export interface ApodPageProps {}

export function ApodPage(props: ApodPageProps) {
  const { loading, apodResponse, error } = useApod(
    useMemo(
      () => ({
        date: DateTime.now().toFormat('yyyy-MM-dd'),
        api_key: 'DEMO_KEY',
      }),
      []
    )
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <div className={styles['container']}>
      <h1>Welcome to ApodPage!</h1>
      {apodResponse && JSON.stringify(apodResponse, null, 2)}
    </div>
  );
}

export default ApodPage;
