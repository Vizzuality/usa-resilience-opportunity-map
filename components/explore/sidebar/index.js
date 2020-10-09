import { connect } from 'react-redux';
import {
  toggleCategoriesActive,
  setIndicatorsCategory,
} from 'providers/indicators/actions';
import { selectIndicatorsProps } from 'providers/indicators/selectors';
import { geometryValues } from 'providers/geometries/selectors';

import Component from './component';

export default connect(
  (state) => ({
    ...selectIndicatorsProps(state),
    geometryValues: geometryValues(state),
  }),
  {
    toggleCategoriesActive,
    setIndicatorsCategory,
  }
)(Component);
