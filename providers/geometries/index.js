import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CancelToken } from 'axios';

import reducerRegistry from 'store/registry';
import * as actions from './actions';
import reducers from './reducers';
import initialState from './initial-state';
import { selectGeometriesProps } from './selectors';

class GeometriesProvider extends PureComponent {
  static propTypes = {
    getGeometries: PropTypes.func.isRequired,
    data: PropTypes.array,
  };

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps?.data?.length && !this.props?.data?.length) {
      // Need to fetch new data
      this.fetch();
    }
  }

  fetch = () => {
    const { getGeometries } = this.props;

    this.cancel();
    this.source = CancelToken.source();

    getGeometries(this.source.token);
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

reducerRegistry.registerModule('geometries', {
  actions,
  reducers,
  initialState,
});

export default connect(selectGeometriesProps, actions)(GeometriesProvider);
