import Axios, { AxiosError, type AxiosRequestConfig} from 'axios';

const isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;

export const AXIOS_INSTANCE = Axios.create({ baseURL: '' });

function isIsoDateString(value: any): boolean {
  return value && typeof value === 'string' && isoDateFormat.test(value);
}

export function handleDates(body: any) {
  if (body === null || body === undefined || typeof body !== 'object')
    return body;

  for (const key of Object.keys(body)) {
    const value = body[key];
    if (isIsoDateString(value)) {
      body[key] = new Date(value); // default JS conversion
      // body[key] = parseISO(value); // date-fns conversion
      // body[key] = luxon.DateTime.fromISO(value); // Luxon conversion
      // body[key] = moment(value).toDate(); // Moment.js conversion
    } else if (typeof value === 'object') {
      handleDates(value);
    }
  }
}

AXIOS_INSTANCE.interceptors.response.use((originalResponse) => {
  handleDates(originalResponse.data);
  return originalResponse;
});

export const baseAxiosInstance = <T>(config: AxiosRequestConfig<any>): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(
    ({ data }) => data,
  );

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export default baseAxiosInstance;

export interface ErrorType<Error> extends AxiosError<Error> { }