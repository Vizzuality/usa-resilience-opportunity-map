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
    getGeometryValues: PropTypes.func.isRequired,
    getCensusGeometries: PropTypes.func.isRequired,
    data: PropTypes.array,
    geometryValues: PropTypes.array,
    id: PropTypes.string,
    currentLocation: PropTypes.object,
  };

  componentDidMount() {
    const { id } = this.props;
    this.fetchGeometries();
    if (id) this.fetchGeometryValues();
  }

  componentDidUpdate(prevProps) {
    if (prevProps?.data?.length && !this.props?.data?.length) {
      // Need to fetch new data
      this.fetchGeometries();
    }

    if (this.props?.currentLocation?.parentId) {
      // county selected
      this.fetchCensusGeometries();
    }

    if (
      (this.props?.id && prevProps.id !== this.props.id) || // location change
      (prevProps?.geometryValues?.length && !this.props?.geometryValues?.length) // geometry values reset
    ) {
      this.fetchGeometryValues();
    }
  }

  fetchGeometries = () => {
    const { getGeometries } = this.props;

    this.cancel();
    this.source = CancelToken.source();

    getGeometries(this.source.token);
  };

  fetchGeometryValues = () => {
    const { id, getGeometryValues } = this.props;
    getGeometryValues({ cancelToken: this.source.token, id });
  };

  fetchCensusGeometries = () => {
    const { id, getCensusGeometries } = this.props;
    getCensusGeometries({ cancelToken: this.source.token, id });
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
