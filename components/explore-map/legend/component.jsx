import React, { useState } from "react";
import {
  Legend,
  LegendListItem,
  LegendItemTypes,
  LegendItemTimeStep,
  LegendItemToolbar,
  LegendItemButtonOpacity,
  LegendItemButtonVisibility,
} from "vizzuality-components";

import { getParams } from 'utils/timeline';

// DATA
import DEFAULT_LAYERS from "../activeLayers";

export default function MapLegend() {
  const [
    layers,
    // setLayers
  ] = useState(DEFAULT_LAYERS);
  // const [layersJson, setLayersJson] = useState(
  //   JSON.stringify(DEFAULT_LAYERS, null, 2)
  // );
  const [layersSettings, setLayersSettings] = useState({});
  // const [layersInteractiveIds, setLayersInteractiveIds] = useState([]);

  const layerGroups = layers.map((l) => {
    const { id, paramsConfig, sqlConfig, decodeConfig, timelineConfig } = l;
    const lSettings = layersSettings[id] || {};

    const params = !!paramsConfig && getParams(paramsConfig, lSettings.params);
    const sqlParams = !!sqlConfig && getParams(sqlConfig, lSettings.sqlParams);
    const decodeParams =
      !!decodeConfig &&
      getParams(decodeConfig, { ...timelineConfig, ...lSettings.decodeParams });
    const timelineParams = !!timelineConfig && {
      ...timelineConfig,
      ...getParams(paramsConfig, lSettings.params),
      ...getParams(decodeConfig, lSettings.decodeParams),
    };

    return {
      id,
      slug: id,
      dataset: id,
      layers: [
        {
          active: true,
          ...l,
          ...lSettings,
          params,
          sqlParams,
          decodeParams,
          timelineParams,
        },
      ],
      ...lSettings,
    };
  });

  const onChangeOrder = (ids) => {
    console.log("onChangeOrder", ids);
  };
  
  const onChangeVisibility = (l, visibility) => {
    setLayersSettings({
      ...layersSettings,
      [l.id]: {
        ...layersSettings[l.id],
        visibility
      }
    });
  };
  
  const onChangeOpacity = (l, opacity) => {
    setLayersSettings({
      ...layersSettings,
      [l.id]: {
        ...layersSettings[l.id],
        opacity
      }
    });
  };

  const onChangeLayerDate = (dates, layer) => {
    const { id, decodeConfig } = layer;

    setLayersSettings({
      ...layersSettings,
      [id]: {
        ...layersSettings[id],
        ...(decodeConfig && {
          decodeParams: {
            startDate: dates[0],
            endDate: dates[1],
            trimEndDate: dates[2]
          }
        }),
        ...(!decodeConfig && {
          params: {
            startDate: dates[0],
            endDate: dates[1]
          }
        })
      }
    });
  };

  return (
    <div className="c-legend">
      <Legend
        maxHeight="65vh"
        collapsable={false}
        sortable={false}
        onChangeOrder={onChangeOrder}
      >
        {layerGroups.map((layerGroup, i) => {
          return (
            <LegendListItem
              index={i}
              key={layerGroup.slug}
              layerGroup={layerGroup}
              toolbar={(
                <LegendItemToolbar>
                  <LegendItemButtonOpacity
                    trackStyle={{
                      background: "#FFCC00",
                    }}
                    handleStyle={{
                      background: "#FFCC00",
                    }}
                  />
                  <LegendItemButtonVisibility />
                </LegendItemToolbar>
              )}
              onChangeVisibility={onChangeVisibility}
              onChangeOpacity={onChangeOpacity}
            >
              <LegendItemTypes />

              <LegendItemTimeStep
                defaultStyles={{
                  handleStyle: {
                    backgroundColor: "white",
                    borderRadius: "50%",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.29)",
                    border: "0px",
                    zIndex: 2,
                  },
                  railStyle: { backgroundColor: "#d6d6d9" },
                  dotStyle: { visibility: "hidden", border: "0px" },
                }}
                handleChange={onChangeLayerDate}
              />
            </LegendListItem>
          );
        })}
      </Legend>
    </div>
  );
}
