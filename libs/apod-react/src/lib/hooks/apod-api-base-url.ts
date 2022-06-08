import { createContext } from "react";

/**
 * This context provider is used to override the default API URL for the APOD
 * api. This could be used to make a request to a different API rather than
 * the actual API.
 */
export const ApodApiBaseUrl = createContext<string | undefined>(undefined);
