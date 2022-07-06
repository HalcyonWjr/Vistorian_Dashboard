"use strict";
// Assign the specification to a local variable vlSpec
const getVegaHistogramSpec = (field) => {
    return {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "description": "dashboard general chart3",
          "data": {
          "url": "https://gist.githubusercontent.com/HalcyonWjr/598fa622089110aae833b637edbacda5/raw/1762e78f003e08d29c8995cf738ff69e918bf346/db_fulldata.json",
          "format":{
            "type": "json",
            "property": "averageSessionTime.value"
          }
        },
        "transform": [
      {"filter": {"field": "userType", "equal":field}}],
          "encoding": {
            "y": {"field": "userType", "type": "nominal", "title": null, "axis": {"ticks": false, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}}
          },
          "layer": [
            {
              "mark": {"type": "rule"},
              "encoding": {
                "x": {
                  "field": "min",
                  "type": "quantitative",
                  "scale": {"zero": false},
                  "title": null,
                  "axis":null
                },
                "x2": {"field": "max"}
              }
            },
            {
              "mark": {"type": "bar", "size": 20, "stroke":"black", "tooltip": {"content": "data"}},
              "encoding": {
                "x": {"field": "q1", "type": "quantitative"},
                "x2": {"field": "q3"},
                "color": {
                  "field": field,
                  "type": "nominal",
                  "legend": null,
                  "scale": {
                    "range": ["#CFE6FF", "#E8F3FF", "#489FFF", "#8EC4FF"]
                  }
                }
              }
            },
            {
              "mark": {"type": "tick", "color": "black", "size": 20,"width":2},
              "encoding": {"x": {"field": "q2", "type": "quantitative", "axis":null}}
            }
          ],
  "config": {"tick": {"thickness": 2}, "view": {"stroke": "transparent"}}
    }
};
// Embed the visualization in the container with id `vis`
vegaEmbed('#a', getVegaHistogramSpec('demo'), {mode: "vega-lite", actions:false});
vegaEmbed('#b', getVegaHistogramSpec('data_struggler'), {mode: "vega-lite", actions:false});
vegaEmbed('#c', getVegaHistogramSpec('ss_explorer'), {mode: "vega-lite", actions:false});
vegaEmbed('#d', getVegaHistogramSpec('ms_explorer'), {mode: "vega-lite", actions:false});