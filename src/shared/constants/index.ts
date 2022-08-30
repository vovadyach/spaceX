type TErrorMessage = {
  COMMON: string;
  DATA_FETCH: string;
  PAGE_NOT_FOUND: string;
};

export const ERROR_MESSAGE: TErrorMessage = {
  COMMON: 'Something went wrong. Please, try again later.',
  DATA_FETCH: 'Data could not be retrieved',
  PAGE_NOT_FOUND: 'Page could not be found',
};
