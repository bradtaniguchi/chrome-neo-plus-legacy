/**
 * Utility function that returns the global cached got instance.
 *
 * This wrapper is required as the `got` instance needs to be dynamically
 * imported via `import`
 *
 * @unstable
 */
export const getGot = async () => {
  return require('got');
};
