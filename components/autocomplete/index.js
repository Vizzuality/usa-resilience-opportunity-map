import { connect } from 'react-redux';

import { setGeometryId } from 'providers/geometries/actions';
import Component from './component';

export default connect(null, {
  setGeometryId,
})(Component);
