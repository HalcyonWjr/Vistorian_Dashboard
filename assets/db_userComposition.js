// var url = "https://www.jinruiw.com/dashboard_dataset/sample_general.json"; 

const chart1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "User composition",
  "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
    "data": {
      // "url": "https://www.jinruiw.com/dashboard_dataset/sample_general.json",
      "url": "./data/general.json",
      "format":{
        "type": "json",
        "property": "userComposition.value"
      }
    },
    "encoding": {
      "y": {
        "field": "userType",
        "type": "nominal",
        "title": null,
        "axis": {"ticks": false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12},
        "sort": ["demo", "data_struggler", "ss_explorer", "ms_explorer"]
      },
      "x": {
        "field": "userNum",
        "type": "quantitative",
        "scale": {"domain": [0, 1500]},
        "title": null,
        "axis": null
      }
    },
    "layer": [
      {
        "mark": {"type": "bar", "cornerRadiusEnd": 5, "height": {"band": 0.88}},
        "encoding": {
          "color": {
            "field": "userType",
            "scale": {"range": ["#CFE6FF", "#E8F3FF", "#489FFF", "#8EC4FF"]},
            "type": "nominal",
            "legend":null
          }
        }
      },
      {
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "middle",
          "dx": 3,
          "fontSize":12
        },
        "encoding": {"text": {"field": "userNum", "type": "quantitative"}}
      }
    ],
     "config":{
      "axis": {"grid": false, "ticks":false},
      "view": {"stroke": "transparent"}
    }
  };
      vegaEmbed("#chart1", chart1, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);