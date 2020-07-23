import template from 'lodash/template';
import localforage from 'localforage';
import { setup } from 'axios-cache-adapter';
import Jsona, { SwitchCaseJsonMapper, SwitchCaseModelMapper } from 'jsona';

/**
 * Example service class.
 * Based on https://github.com/Vizzuality/ReFED-frontend/blob/develop/services/sectors/index.js
 */
class ExampleService {
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
      name: 'ng-example',
    });

    // Create `axios` instance with pre-configured `axios-cache-adapter` using a `localforage` store
    this.api = setup({
      baseURL: `${process.env.API}`,
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

export const service = new ExampleService();

// ROUTES
export function fetchService(params, options = {}) {
  const url = template('/endpoint', {
    interpolate: /{{([\s\S]+?)}}/g,
  });

  return service.request(url(params), options);
}

export default service;
