import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import startCase from 'lodash.startcase';

import Icon from 'components/icon';
import HumanImpact from 'svgs/human_impact.svg?sprite';
import ClimateRisk from 'svgs/climate_risk.svg?sprite';
import Vulnerability from 'svgs/vulnerability.svg?sprite';

export default function ExploreSidebar(props) {
  const {
    active,
    category,
    indicators,
    categories,
    toggleIndicatorsActive,
    setIndicatorsCategory,
  } = props;

  const icons = {
    'human impact': HumanImpact,
    'climate risk': ClimateRisk,
    vulnerability: Vulnerability,
  };

  const colors = {
    'human impact': '#795DF3',
    'climate risk': '#3BB3BA',
    vulnerability: '#F0685B',
  };

  const styles = (selected, indicator) => {
    switch (indicator) {
      case 'human impact':
      case 'climate risk':
        return {
          fill: selected ? '#fff' : colors[indicator],
        };
      case 'vulnerability':
        return {
          stroke: selected ? '#fff' : colors[indicator],
        };
      default:
        return null;
    }
  };

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
              style={{ backgroundColor: c.id === category && colors[c.name] }}
            >
              <div className="explore-sidebar--tab-icon">
                <Icon
                  icon={icons[c.name]}
                  style={styles(c.id === category, c.name)}
                />
              </div>
              <div className="explore-sidebar--tab-name">{c.name}</div>
            </button>
          </li>
        ))}
      </ul>

      {/* LIST */}
      <ul className="explore-sidebar--list">
        {indicators.map((d) => {
          const isItemActive = !!active.find((a) => a === d.id);
          return (
            <li
              className={cx({
                'explore-sidebar--list-item': true,
                '-active': isItemActive,
              })}
              key={d.id}
            >
              <div className="explore-sidebar--item-info">
                <div className="explore-sidebar--item-group">
                  <Icon
                    className="item-icon"
                    icon={icons[d.category.name]}
                    style={styles(false, d.category.name)}
                  />
                  <span>{d.category.name}</span>
                </div>
                <span className="indicator-name">{startCase(d.name)}</span>
              </div>

              <div className="explore-sidebar--item-controls">
                <div>{/* Hazard level */}</div>
                <div className="explore-sidebar--item-buttons">
                  <button onClick={() => {}}>More Info</button>
                  <button
                    className={cx({ 'active-layer': isItemActive })}
                    onClick={() => {
                      toggleIndicatorsActive(d.id);
                    }}
                    disabled={active.length > 1 && !isItemActive}
                    style={{
                      backgroundColor: isItemActive && colors[d.category.name],
                    }}
                  >
                    {isItemActive ? 'Hide Layer' : 'Show layer'}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
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
