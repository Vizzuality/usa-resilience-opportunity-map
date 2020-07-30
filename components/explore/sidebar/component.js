import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function ExploreSidebar(props) {
  const {
    active,
    category,
    indicators,
    categories,
    toggleIndicatorsActive,
    setIndicatorsCategory,
  } = props;

  return (
    <div className="c-explore-sidebar">
      {/* TABS */}
      <ul className="explore-sidebar--tabs">
        {categories.map((c) => (
          <li className="explore-sidebar--tab-item" key={c.id}>
            <button
              className={cx({
                'explore-sidebar--tab-btn': true,
                '-active': c.id === category,
              })}
              onClick={() => {
                setIndicatorsCategory(c.id);
              }}
            >
              <div className="explore-sidebar--tab-icon" />
              <div className="explore-sidebar--tab-name">{c.name}</div>
            </button>
          </li>
        ))}
      </ul>

      {/* LIST */}
      <ul className="explore-sidebar--list">
        {indicators.map((d) => (
          <li
            className={cx({
              'explore-sidebar--list-item': true,
              '-active': active.find((a) => a === d.id),
            })}
            key={d.id}
          >
            <div className="explore-sidebar--list-info">
              {/* category icon */}
              {d.category.name}
              {d.name}

              <button
                onClick={() => {
                  toggleIndicatorsActive(d.id);
                }}
              >
                Toogle layer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ExploreSidebar.propTypes = {
  active: PropTypes.array,
  category: PropTypes.string,
  categories: PropTypes.array,
  indicators: PropTypes.array,
  toggleIndicatorsActive: PropTypes.func,
  setIndicatorsCategory: PropTypes.func,
};
