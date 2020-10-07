import React, { useState } from 'react';
import cx from 'classnames';
import startCase from 'lodash.startcase';
import Icon from 'components/icon';
import HazardIndicator from 'components/explore/hazard-indicator';
import ArrowUp from 'svgs/arrow_up.svg?sprite';
import { CATEGORIES } from 'providers/indicators/constants';

export default function sidebarCard({
  item,
  modalFunctions,
  icons,
  colors,
  active,
  activeCategories,
  geometryValues,
  geometryChildren,
  currentLocation,
  childrenDistribution,
  toggleIndicatorsActive,
}) {
  const { openModal, setModalContent } = modalFunctions;
  const isItemActive = !!active.find((a) => a === item.id);
  const indicatorValues = geometryValues.find(
    (v) => v.indicator?.id === item.id
  );
  const showBtnDisabled =
    (active.length > 1 || activeCategories.includes(item.category.id)) &&
    !isItemActive;

  const [chartVisible, showChart] = useState(false);

  const indicatorDistribution = childrenDistribution
    ? childrenDistribution[item.id]
    : null;
  const chartRamp = CATEGORIES[item.category.id].ramp;
  const chartData = indicatorDistribution
    ? Object.keys(indicatorDistribution).reduce((acc, key) => {
        acc[key] = indicatorDistribution[key].length || 0;
        return acc;
      }, {})
    : null;

  return (
    <li className="c-sidebar-card">
      <div className="explore-sidebar--list-item">
        <div className="explore-sidebar--item-info">
          <div className="explore-sidebar--item-group">
            <Icon
              className="item-icon"
              icon={icons[item.category.name]}
              style={{ fill: colors[item.category.name] }}
            />
            <span>{item.category.name}</span>
          </div>
          <span className="indicator-name">{startCase(item.name)}</span>
        </div>

        <div className="explore-sidebar--item-controls">
          <div className="explore-sidebar--item-charts">
            {chartData && (
              <button
                className={cx('toggle-chart-btn', { '--active': chartVisible })}
                onClick={() => showChart(!chartVisible)}
              >
                <Icon icon={ArrowUp} />
              </button>
            )}
            {geometryValues.length > 0 && (
              <HazardIndicator
                hazardLevel={indicatorValues ? indicatorValues.hazardValue : 5}
                className="explore-sidebar--hazard"
              />
            )}
          </div>
          <div className="explore-sidebar--item-buttons">
            <button
              onClick={() => {
                openModal(true);
                setModalContent(item);
              }}
              disabled={!item.description}
              title={
                item.description
                  ? 'MORE INFORMATION ABOUT THIS INDICATOR'
                  : "THERE'S NO AVAILABLE INFORMATION"
              }
            >
              More Info
            </button>
            <button
              className={cx({ 'active-layer': isItemActive })}
              onClick={() => {
                toggleIndicatorsActive(item.id);
              }}
              disabled={showBtnDisabled}
              title={
                showBtnDisabled
                  ? 'YOU CAN CHOOSE UP TO TWO LAYERS'
                  : 'SEE THIS INDICATOR ON THE MAP'
              }
              style={{
                backgroundColor: isItemActive && colors[item.category.name],
              }}
            >
              {isItemActive ? 'Hide Layer' : 'Show layer'}
            </button>
          </div>
        </div>
      </div>
      {chartVisible && chartData && (
        <div>
          {`${currentLocation.label} ${startCase(
            item.name
          )} Distribution by county:`}
          <div className="explore-sidebar--item-chart">
            {chartData &&
              Object.entries(chartData).map(([hazardLevel, count]) => (
                // <div>{`${hazardLevel}: ${count/geometryChildren.length * 100} (${count} out of ${geometryChildren.length})`}</div>
                <div
                  style={{
                    height: '100%',
                    width: `${(count / geometryChildren.length) * 100}%`,
                    backgroundColor: chartRamp[hazardLevel],
                  }}
                />
              ))}
          </div>
        </div>
      )}
    </li>
  );
}
