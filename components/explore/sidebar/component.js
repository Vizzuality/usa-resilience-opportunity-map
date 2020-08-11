import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import startCase from 'lodash.startcase';
import { useRouter } from 'next/router';

import Icon from 'components/icon';
import HumanImpact from 'svgs/human_impact.svg?sprite';
import ClimateRisk from 'svgs/climate_risk.svg?sprite';
import Vulnerability from 'svgs/vulnerability.svg?sprite';

export default function ExploreSidebar(props) {
  const {
    active,
    category,
    indicators,
    data,
    categories,
    activeCategories,
    toggleIndicatorsActive,
    toggleCategoriesActive,
    setIndicatorsCategory,
  } = props;

  const router = useRouter();

  useEffect(() => {
    /* If active (indicators) change, push the to the URL */
    // TODO: write proper serializer
    router.push(
      `${router.pathname}${Object.keys(router.query).length ? '?' : ''}${
        router.query.id ? `id=${router.query.id}` : ''
      }${active[0] ? `&indicator=${active[0]}` : ''}${
        active[1] ? `&indicator=${active[1]}` : ''
      }`,
      undefined,
      { shallow: true }
    );
  }, [active]);

  useEffect(() => {
    const { indicator } = router.query;
    /* If the url has indicators, change the state */
    if (indicator) {
      if (Array.isArray(indicator) && indicator.length > active.length) {
        // Indicator array = bivariate (max 2 indicators)
        const id1 = indicator[0];
        const id2 = indicator[1];
        const ind1 = data.find((i) => i.id === id1);
        const ind2 = data.find((i) => i.id === id2);

        toggleIndicatorsActive(ind1?.id);
        toggleCategoriesActive(ind1?.category?.id);
        toggleIndicatorsActive(ind2?.id);
        toggleCategoriesActive(ind2?.category?.id);
      } else if (active.length === 0) {
        const ind = data.find((i) => i.id === indicator);
        toggleIndicatorsActive(ind.id);
        toggleCategoriesActive(ind.category.id);
        setIndicatorsCategory(ind.category.id);
      }
    }
  }, [router.query.indicator]);

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
              {activeCategories.includes(c.id) && (
                <div
                  className="explore-sidebar--tab-dot"
                  style={{ backgroundColor: colors[c.name] }}
                />
              )}
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
                      toggleCategoriesActive(d.category.id);
                    }}
                    disabled={
                      (active.length > 1 ||
                        activeCategories.includes(d.category.id)) &&
                      !isItemActive
                    }
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
  activeCategories: PropTypes.array,
  indicators: PropTypes.array,
  data: PropTypes.array,
  toggleIndicatorsActive: PropTypes.func,
  toggleCategoriesActive: PropTypes.func,
  setIndicatorsCategory: PropTypes.func,
};
