import { connect } from 'react-redux';
import { selectExploreUrlParams } from 'providers/indicators/selectors';

import Component from './component';

export default connect(
  (state) => ({
    urlParams: selectExploreUrlParams(state),
  }),
  null
)(Component);
