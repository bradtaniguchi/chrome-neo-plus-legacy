import { https, logger } from 'firebase-functions';

// TODO: move to its own functions folder
export const getApod = https.onRequest((request, response) => {
  const prefix = 'apod ';
  logger.info(prefix + 'hello world!', { structuredData: true });

  // TODO: Update to only support localhost for testing later.
  // if (request.method === 'OPTIONS') {
  //   response.set('Access-Control-Allow-Headers', 'authorization,content-type');
  //   response.set('Access-Control-Allow-Origin', '*');
  //   response.status(204).send('');
  // } else {
  //   // return hello world
  //   response.set('Access-Control-Allow-Origin', '*');
  //   response.send({
  //     message: 'Hello from firebase!',
  //   });
  // }
  response.send({
    message: 'Hello from firebase!',
  });
});
