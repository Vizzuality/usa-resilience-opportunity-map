import { useRef } from 'react';
import { useRouter } from 'next/router';
import qs from 'query-string';
import useDeepCompareEffect from 'utils/deepCompare';
import isEmpty from 'lodash.isempty';
import { diff } from 'utils/diff';

export default function URL({
  type = 'push',
  queryParams,
  queryFunction,
  options = {
    skipNull: true,
    skipEmptyString: true,
    arrayFormat: 'comma',
  },
}) {
  const router = useRouter();
  const isMounted = useRef(false);
  const prevQuery = useRef({});
  const { query, pathname } = router;

  useDeepCompareEffect(() => {
    const queryParamsSerialized = qs.stringify(queryParams, options);

    router[
      isMounted.current ? type : 'replace'
    ](
      `${pathname}?${queryParamsSerialized}`,
      `${pathname}?${queryParamsSerialized}`,
      { shallow: true }
    );
  }, [queryParams]);

  useDeepCompareEffect(() => {
    if (isMounted.current && !isEmpty(query)) {
      const queryKeys = Object.keys(queryParams);
      const changedKeys = Object.keys(diff(query, prevQuery.current));
      console.log(changedKeys, query, prevQuery.current);

      queryKeys.forEach((k) => {
        if (queryFunction && changedKeys.includes(k)) {
          queryFunction({ key: k, value: query[k] || null });
        }
      });
    } else {
      isMounted.current = true;
    }

    prevQuery.current = query;
  }, [query]);

  return null;
}
