import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CancelToken } from 'axios';

import reducerRegistry from 'store/registry';
import * as actions from './actions';
import reducers from './reducers';
import initialState from './initial-state';
import { selectStatesProps } from './selectors';

class StatesProvider extends PureComponent {
  static propTypes = {
    getStates: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const { getStates } = this.props;

    this.cancel();
    this.source = CancelToken.source();

    getStates(this.source.token);
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

reducerRegistry.registerModule('states', {
  actions,
  reducers,
  initialState,
});

export default connect(selectStatesProps, actions)(StatesProvider);
