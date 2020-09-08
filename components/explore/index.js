import { connect } from 'react-redux';
import { setGeometryId, setGeometryValues } from 'providers/geometries/actions';
import {
  selectIndicatorsProps,
  selectExploreUrlParams,
} from 'providers/indicators/selectors';

import Component from './component';

export default connect(
  (state) => ({
    ...selectIndicatorsProps(state),
    urlParams: selectExploreUrlParams(state),
  }),
  {
    setGeometryId,
    setGeometryValues,
  }
)(Component);
