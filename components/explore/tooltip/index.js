import { connect } from 'react-redux';
import { selectIndicatorsProps } from 'providers/indicators/selectors';
import { selectGeometriesProps } from 'providers/geometries/selectors';

import Component from './component';

export default connect(
  (state) => ({
    indicators: selectIndicatorsProps(state),
    geometries: selectGeometriesProps(state),
  }),
  null
)(Component);
