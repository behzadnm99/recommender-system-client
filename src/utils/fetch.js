import axios from 'axios';
import config from '../consts';

const configs = config.server.api

axios.defaults.baseURL = configs.url;
axios.defaults.timeout = configs.timeout;

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  let config = err.config;
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err);

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0;

  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err);
  }

  // Increase the retry count
  config.__retryCount += 1;

  // Create new promise to handle exponential backoff
  let backoff = new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, config.retryDelay || 1);
  });

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function() {
    return axios(config);
  });
});

export default async config => {
  const options = Object.assign(
    {},
    {
      url: undefined,
      method: undefined,
      data: {},
      headers: {},
      isLogged: false,
      cancelToken: undefined,
      formData: false
    },
    config
  );

  if (options.isLogged) {
    options.headers.Authorization = localStorage.getItem('token') || '';
  }

  const request = {
    ...options,
    retry: 0,
    retryDelay: 1000,
    headers: {
      ...options.headers,
      'Content-Type': options.formData
        ? 'multipart/form-data'
        : 'application/json;charset=utf-8'
    }
  };

  try {
    const response = await axios(request);

    return response;
  } catch (error) {
    if (Object.is(error.message, 'Request failed with status code 401')) {
      localStorage.clear();
      window.location.assign('/signin');
    }

    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
      throw error;
    } else {
      throw error;
    }
  }
};