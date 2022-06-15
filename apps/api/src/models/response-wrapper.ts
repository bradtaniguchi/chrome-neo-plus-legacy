/**
 * Wrapper that should be applied to any http response.
 * This is required as JSON responses from firebase need
 * to follow a specific response format.
 */
export interface ResponseWrapper<T> {
  /**
   * The actual data to send back. This is required, otherwise
   * the client-side firebase code will throw an error.
   */
  data: T;
}
