import { GetWithDateParams } from '@chrome-neo-plus/apod-common';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { DateTime } from 'luxon';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ApodImage from '../../components/apod-image/apod-image';
import { useApod } from '../../hooks';

export interface ApodPageProps {
  /**
   * Optional date param that can be used to override the
   * route param.
   *
   * Primarily useful for prototyping.
   */
  date?: string;
}
/**
 * Page that displays the APOD image of the day, based on the `date` route param.
 *
 * Works with the `ApodListPage` to display a given APOD.
 *
 * @page
 * @unstable
 */
export function ApodPage(props: ApodPageProps) {
  const { date: paramDate } = useParams<Pick<GetWithDateParams, 'date'>>();
  const { date: propDate } = props;
  const date = propDate ?? paramDate ?? '';

  const dateTime = useMemo(
    () => DateTime.fromFormat(date, 'yyyy-MM-dd'),
    [date]
  );
  const apodRequest = useMemo(
    () =>
      ({
        // not passing a date will error out as it isn't a valid param,
        // this is expected
        date: dateTime.isValid ? dateTime.toFormat('yyyy-MM-dd') : undefined,
      } as GetWithDateParams),
    [dateTime]
  );

  const { loading, apodResponse, error } = useApod(apodRequest);

  if (!dateTime.isValid)
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1">
          An invalid date provided "{date}", expected format: yyyy-mm-dd
        </Typography>
      </Box>
    );
  if (loading)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <div title={JSON.stringify(error, null, 2)}>Oops there was an error!</div>
    );
  if (!apodResponse) return <div>No APOD found</div>;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      p={2}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <ApodImage
          {...apodResponse}
          sx={{
            height: '100%',
            width: '100%',
            maxWidth: '300px',
          }}
        />
      </Box>
      <div>
        <Typography variant="h3">{apodResponse.title}</Typography>
        <Typography variant="body1">{apodResponse.explanation}</Typography>
      </div>
      <div>
        <Link href={apodResponse.hdurl} variant="body1">
          HD Image
        </Link>
      </div>
    </Box>
  );
}

export default ApodPage;
