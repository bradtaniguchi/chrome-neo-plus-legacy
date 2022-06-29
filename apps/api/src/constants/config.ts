/**
 * Wrapper around process.env config.
 * Use `verifyConfig` to verify if the config is valid.
 *
 * @see verifyConfig
 */
export const config = {
  API_KEY: process.env.API_KEY,
};
