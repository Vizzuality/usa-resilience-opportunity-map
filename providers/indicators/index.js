import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CancelToken } from 'axios';

import reducerRegistry from 'store/registry';
import * as actions from './actions';
import reducers from './reducers';
import initialState from './initial-state';
import { selectIndicatorsProps } from './selectors';

class IndicatorsProvider extends PureComponent {
  static propTypes = {
    getIndicators: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const { getIndicators } = this.props;

    this.cancel();
    this.source = CancelToken.source();

    getIndicators(this.source.token);
  };

  cancel = () => {
    if (this.source) {
      this.source.cancel('Abort');
    }
  };

  render() {
    return null;
  }
}

reducerRegistry.registerModule('indicators', {
  actions,
  reducers,
  initialState,
});

export default connect(selectIndicatorsProps, actions)(IndicatorsProvider);
