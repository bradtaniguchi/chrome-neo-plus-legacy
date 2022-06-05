import styles from './not-found-page.module.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

/* eslint-disable-next-line */
export interface NotFoundPageProps {}

export function NotFoundPage(props: NotFoundPageProps) {
  return (
    <div className={styles['container']}>
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '64px',
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h5">
                Page Not Found
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

export default NotFoundPage;
