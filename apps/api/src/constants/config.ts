/**
 * Wrapper around process.env config.
 * Use `verifyConfig` to verify if the config is valid.
 *
 * @see verifyConfig
 */
export const config = {
  API_KEY: process.env.API_KEY,
};

/**
 * Function that verifies the config object.
 */
export const verifyConfig = () => {
  if (!config.API_KEY) {
    throw new Error('config is missing API_KEY');
  }
};
