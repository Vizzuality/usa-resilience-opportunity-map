import { connect } from 'react-redux';
import { selectIndicatorsProps } from 'providers/indicators/selectors';

import Component from './component';

export default connect(selectIndicatorsProps, null)(Component);
