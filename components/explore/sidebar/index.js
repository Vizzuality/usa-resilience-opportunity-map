import { connect } from 'react-redux';
import {
  toggleIndicatorsActive,
  toggleCategoriesActive,
  setIndicatorsCategory,
} from 'providers/indicators/actions';
import { selectIndicatorsProps } from 'providers/indicators/selectors';

import Component from './component';

export default connect(selectIndicatorsProps, {
  toggleIndicatorsActive,
  toggleCategoriesActive,
  setIndicatorsCategory,
})(Component);
