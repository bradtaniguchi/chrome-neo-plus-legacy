import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DateTime } from 'luxon';
import { useMemo } from 'react';
import ApodImage from '../../components/apod-image/apod-image';
import { useApod } from '../../hooks';

/* eslint-disable-next-line */
export interface ApodPageProps {}

/**
 * Page that displays the APOD image of the day.
 *
 * Works with the `ApodListPage` to display a given APOD.
 *
 * @page
 * @unstable
 */
export function ApodPage(props: ApodPageProps) {
  const { loading, apodResponse, error } = useApod(
    useMemo(
      () => ({
        date: DateTime.now().toFormat('yyyy-MM-dd'),
        // TODO: Will be migrated
        api_key: 'DEMO_KEY',
      }),
      []
    )
  );

  // TODO: show loading spinner
  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'row'
    }}
    >
      <div>
        <ApodImage {...apodResponse} size="100%"/>
      </div>
      <div>
        <Typography variant="h1">{apodResponse?.title}</Typography>
        <p>{apodResponse?.explanation}</p>
      </div>
    </Box>
  );
}

export default ApodPage;
