import React, { useState } from 'react';
import cx from 'classnames';
import startCase from 'lodash.startcase';
import Icon from 'components/icon';
import HazardIndicator from 'components/explore/hazard-indicator';
import ArrowUp from 'svgs/arrow_up.svg?sprite';
import { CATEGORIES } from 'providers/indicators/constants';

import styles from './styles.module.scss';

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

  // CHART DATA
  const [chartVisible, showChart] = useState(false);
  const chartRamp = CATEGORIES[item.category.id].ramp;
  const indicatorDistribution = childrenDistribution
    ? childrenDistribution[item.id]
    : null;
  const chartData = indicatorDistribution
    ? Object.keys(indicatorDistribution).reduce((acc, key) => {
        acc[key] = indicatorDistribution[key].length || 0;
        return acc;
      }, {})
    : null;

  // CHART LEGEND
  const hazards = ['Low', 'Low-medium', 'Medium', 'Medium-high', 'High'];
  const hazardLevels = chartData ? Object.keys(chartData) : null;
  const chartLegendValues = {
    low: hazardLevels ? hazards[hazardLevels[0]] : null,
    high: hazardLevels ? hazards[hazardLevels[hazardLevels.length - 1]] : null,
  };

  return (
    <li className={styles.sidebarCard}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>
          <div className={styles.category}>
            <Icon
              className={styles.categoryIcon}
              icon={icons[item.category.name]}
              style={{ fill: colors[item.category.name] }}
            />
            <span className={styles.categoryName}>{item.category.name}</span>
          </div>
          <span className={styles.indicatorName}>{startCase(item.name)}</span>
        </div>

        <div className={styles.topControls}>
          {chartData && (
            <button
              className={styles.toggleChart}
              onClick={() => showChart(!chartVisible)}
              style={{ transform: `rotate(${chartVisible ? 0 : 180}deg)` }}
            >
              <Icon icon={ArrowUp} />
            </button>
          )}
          {geometryValues.length > 0 && (
            <HazardIndicator
              hazardLevel={indicatorValues ? indicatorValues.hazardValue : 5}
              className={styles.hazard}
            />
          )}
        </div>
      </div>

      {chartVisible && chartData && (
        <div className={styles.chartModule}>
          <p className={styles.chartText}>
            {`${currentLocation.label} ${startCase(
              item.name
            )} Distribution by county:`}
          </p>
          <div className={styles.chartWrapper}>
            {chartData &&
              Object.entries(chartData).map(([hazardLevel, count]) => (
                <div
                  style={{
                    height: '100%',
                    width: `${(count / geometryChildren.length) * 100}%`,
                    backgroundColor: chartRamp[hazardLevel],
                  }}
                />
              ))}
          </div>
          <div className={styles.chartLegend}>
            <span>{chartLegendValues.low}</span>
            <span>{chartLegendValues.high}</span>
          </div>
        </div>
      )}

      <div className={styles.cardFooterControls}>
        <div>
          <button
            className={styles.controlButton}
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
            className={cx(styles.controlButton, {
              [styles['--active']]: isItemActive,
            })}
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
    </li>
  );
}