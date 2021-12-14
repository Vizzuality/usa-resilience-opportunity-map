import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import startCase from 'lodash.startcase';

import Icon from 'components/icon';
import Modal from 'components/modal';
import HumanImpact from 'svgs/human_impact.svg?sprite';
import ClimateRisk from 'svgs/climate_risk.svg?sprite';
import Vulnerability from 'svgs/vulnerability.svg?sprite';
import MostRelevant from 'svgs/all_icn.svg?sprite';
import SidebarCard from './sidebar-card';

export default function ExploreSidebar({
  category,
  indicators,
  categories: serverCategories,
  activeCategories,
  setIndicatorsCategory,
  geometryValues,
}) {
  const [isModalOpen, openModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [initialDisclaimer, setInitialDisclaimer] = useState(true);
  const ref = useRef(null);

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
    let tab;

    if (activeCategories.length) {
      tab =
        activeCategories[0] !== ref.current ? activeCategories[0] : ref.current;
    } else if (geometryValues.length) {
      tab = ref.current || '9999';
    } else {
      tab = ref.current || (categories[0] ? categories[0].id : '1');
    }

    setIndicatorsCategory(tab);
    if (ref.current !== tab) ref.current = tab;
  }, [geometryValues, activeCategories]);

  const disableDisclaimer = () => {
    localStorage.setItem('disclaimerModal', 1);
    setInitialDisclaimer(false);
  };

  useEffect(() => {
    const checkedDisclaimer = localStorage.getItem('disclaimerModal');
    if (!checkedDisclaimer) {
      setInitialDisclaimer(true);
    }
    if (checkedDisclaimer) {
      setInitialDisclaimer(false);
    }
  }, []);

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
        {indicators.map((d) => (
          <SidebarCard
            item={d}
            key={d.id}
            modalFunctions={{ openModal, setModalContent }}
            icons={icons}
            colors={colors}
          />
        ))}
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
      <Modal
        isOpen={initialDisclaimer}
        contentLabel="Metadata"
        title=" Welcome to the US Climate Resilience Map!"
        onRequestClose={() => setInitialDisclaimer(false)}
      >
        <div className="modal-attributions-content">
          <p>
            Before you explore this map, please note this was designed as a
            public education platform. It is not intended to be a detailed
            planning tool.
          </p>
          <p>
            The goal was to create a map to better understand the intersection
            of climate risks and social vulnerabilities in communities, and to
            share resilience solutions from ten cities across the United States.
            It is our hope these successful intervention stories will inspire
            other communities facing similar climate related challenges.
          </p>
          <p>
            Our data models may not comport with other models that have
            characterized local risks. For more information about our
            methodology, please visit our “About the Data” section.
          </p>
          <br />
          <button className="disableDisclaimerBtn" onClick={disableDisclaimer}>
            Don’t show this again
          </button>
        </div>
      </Modal>
    </div>
  );
}

ExploreSidebar.propTypes = {
  category: PropTypes.string,
  categories: PropTypes.array,
  activeCategories: PropTypes.array,
  indicators: PropTypes.array,
  setIndicatorsCategory: PropTypes.func,
  geometryValues: PropTypes.array,
};
