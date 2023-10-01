import axios, { AxiosResponse, AxiosError } from 'axios';

export type SearchResponse<T> = {
  data?: T;
  errorMessage?: string;
};

/**
 * Returns search response using a search string, or returns an error message.
 * * TO TEST ERROR MESSAGE MODAL: CLICK ON HEADER'S "SEARCH NPM" string
 * @param {string} searchString - The search string used to fetch results.
 * @return {Promise<SearchResponse<AxiosResponse>>} A promise that resolves to a SearchResponse or an error message.
 */

export const getPackages = async (searchString: string): Promise<SearchResponse<AxiosResponse>> => {
  try {
    return await axios.get(`https://api.npms.io/v2/search/suggestions?q=${searchString}`);
  } catch (error) {
    let errorMessage: string;
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        errorMessage = axiosError.message;
      } else if (axiosError.request) {
        errorMessage = 'No response received';
      } else {
        errorMessage = 'AxiosError without request or response';
      }
      return { errorMessage };
    } else {
      const errorObject = error as Error;
      errorMessage = `Other error: ${errorObject.message}`;
      return { errorMessage };
    }
  }
};

export default getPackages;
