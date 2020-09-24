import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import startCase from 'lodash.startcase';

import Icon from 'components/icon';
import Modal from 'components/modal';
import HazardIndicator from 'components/explore/hazard-indicator';
import HumanImpact from 'svgs/human_impact.svg?sprite';
import ClimateRisk from 'svgs/climate_risk.svg?sprite';
import Vulnerability from 'svgs/vulnerability.svg?sprite';
import MostRelevant from 'svgs/all_icn.svg?sprite';

export default function ExploreSidebar({
  active,
  category,
  indicators,
  categories: serverCategories,
  activeCategories,
  toggleIndicatorsActive,
  setIndicatorsCategory,
  geometryValues,
}) {
  const [isModalOpen, openModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const icons = {
    'most relevant': MostRelevant,
    'human impact': HumanImpact,
    'climate risk': ClimateRisk,
    vulnerability: Vulnerability,
  };

  const colors = {
    'most relevant': '#4B5362',
    'human impact': '#795DF3',
    'climate risk': '#3BB3BA',
    vulnerability: '#F0685B',
  };

  // If there isn't any geometry data (probably "All states view),
  // don't show the "Most relevant" category and
  // update the active category to '1' (by default, "Climate risk").
  const categories =
    geometryValues.length > 0
      ? [{ id: '9999', name: 'most relevant' }, ...serverCategories]
      : serverCategories;

  useEffect(() => {
    if (!geometryValues.length) {
      setIndicatorsCategory(activeCategories[0] || '1');
    } else if (!activeCategories.length) {
      setIndicatorsCategory('9999');
    }
  }, [geometryValues, activeCategories]);

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
                  style={{ fill: c.id === category ? '#fff' : colors[c.name] }}
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
          const indicatorValues = geometryValues.find(
            (v) => v.indicator?.id === d.id
          );
          const showBtnDisabled =
            (active.length > 1 || activeCategories.includes(d.category.id)) &&
            !isItemActive;

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
                    style={{ fill: colors[d.category.name] }}
                  />
                  <span>{d.category.name}</span>
                </div>
                <span className="indicator-name">{startCase(d.name)}</span>
              </div>

              <div className="explore-sidebar--item-controls">
                <div className="explore-sidebar--item-buttons">
                  <button
                    onClick={() => {
                      openModal(true);
                      setModalContent(d);
                    }}
                    disabled={!d.description}
                    title={
                      d.description
                        ? 'MORE INFORMATION ABOUT THIS INDICATOR'
                        : "THERE'S NO AVAILABLE INFORMATION"
                    }
                  >
                    More Info
                  </button>
                  <button
                    className={cx({ 'active-layer': isItemActive })}
                    onClick={() => {
                      toggleIndicatorsActive(d.id);
                    }}
                    disabled={showBtnDisabled}
                    title={
                      showBtnDisabled
                        ? 'YOU CAN CHOOSE UP TO TWO LAYERS'
                        : 'SEE THIS INDICATOR ON THE MAP'
                    }
                    style={{
                      backgroundColor: isItemActive && colors[d.category.name],
                    }}
                  >
                    {isItemActive ? 'Hide Layer' : 'Show layer'}
                  </button>
                </div>
                {geometryValues.length > 0 && (
                  <HazardIndicator
                    hazardLevel={
                      indicatorValues ? indicatorValues.hazardValue : 5
                    }
                    className="explore-sidebar--hazard"
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
      {modalContent?.description && (
        <Modal
          isOpen={isModalOpen}
          contentLabel="Metadata"
          onRequestClose={() => openModal(false)}
          title={startCase(modalContent?.name)}
        >
          <div className="modal-attributions-content">
            {modalContent.description}
          </div>
        </Modal>
      )}
    </div>
  );
}

ExploreSidebar.propTypes = {
  active: PropTypes.array,
  category: PropTypes.string,
  categories: PropTypes.array,
  activeCategories: PropTypes.array,
  indicators: PropTypes.array,
  toggleIndicatorsActive: PropTypes.func,
  setIndicatorsCategory: PropTypes.func,
  geometryValues: PropTypes.array,
};
