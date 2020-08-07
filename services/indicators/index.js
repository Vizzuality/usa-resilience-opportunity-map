// import template from 'lodash.template';
import localforage from 'localforage';
import { setup } from 'axios-cache-adapter';
import Jsona, { SwitchCaseJsonMapper, SwitchCaseModelMapper } from 'jsona';

/**
 * Indicators service class
 * It is a singleton for not instanciate Jsona on each request.
 */
class IndicatorsService {
  /**
   * Creates dataFormatter and add it to service.
   * @constructor
   */
  constructor() {
    this.configure();

    this.dataFormatter = new Jsona({
      modelPropertiesMapper: new SwitchCaseModelMapper(),
      jsonPropertiesMapper: new SwitchCaseJsonMapper(),
    });
  }

  // `async` wrapper to configure `localforage` and instantiate `axios` with `axios-cache-adapter`
  configure = () => {
    // Create `localforage` instance
    const store = localforage.createInstance({
      // List of drivers used
      driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
      // Prefix all storage keys to prevent conflicts
      name: 'usa-indicators',
    });

    // Create `axios` instance with pre-configured `axios-cache-adapter` using a `localforage` store
    this.api = setup({
      // `axios` options
      // This doesn't work...
      baseURL: `${process.env.NEXT_PUBLIC_API}`,

      // `axios-cache-adapter` options
      cache: {
        // ignoreCache: process.env.NODE_ENV === 'development',
        maxAge: 15 * 60 * 1000,
        exclude: { query: false },
        store, // Pass `localforage` store to `axios-cache-adapter`
      },
    });
  };

  sleeper(ms) {
    return (x) => {
      const time = x.request.fromCache ? 0 : ms;

      return new Promise((resolve) => {
        this.timeout = setTimeout(() => resolve(x), time);
      });
    };
  }

  /**
   * request
   * Creates an axios request based on type an options.
   * @param {string} type - The type of the request.
   * @param {object} options - The request options, these are forwarded to axios.
   */
  request(path, options) {
    if (this.timeout) clearTimeout(this.timeout);

    return new Promise((resolve, reject) => {
      this.api
        .get(path, options)
        .then(this.sleeper(1000))
        .then((response) => {
          resolve(this.dataFormatter.deserialize(response.data));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export const service = new IndicatorsService();

// ROUTES
export function fetchIndicators(params, options = {}) {
  return service.request('/indicators?include=category', options);
}

export default service;
