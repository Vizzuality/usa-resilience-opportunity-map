import uniqBy from 'lodash.uniqby';
import { createSelector, createStructuredSelector } from 'reselect';

export const loading = (state) => state?.indicators?.loading;
export const loaded = (state) => state?.indicators?.loaded;
export const error = (state) => state?.indicators?.error;
export const data = (state) => state?.indicators?.data || [];
export const category = (state) => state?.indicators?.category;
export const active = (state) => state?.indicators?.active || [];
export const activeCategories = (state) =>
  state?.indicators?.activeCategories || [];

export const categories = createSelector([data, loading], (_data, _loading) => {
  if (!_data.length || _loading) return [];

  return uniqBy(
    _data.map((d) => ({
      id: d.category.id,
      name: d.category.name,
    })),
    'id'
  );
});

export const indicators = createSelector(
  [data, loading, category],
  (_data, _loading, _category) => {
    if (!_data.length || _loading) return [];

    return _data.filter((d) => d.category.id === _category);
  }
);

export const selectIndicatorsProps = createStructuredSelector({
  data,
  loading,
  loaded,
  error,
  category,
  active,
  indicators,
  categories,
  activeCategories,
});
