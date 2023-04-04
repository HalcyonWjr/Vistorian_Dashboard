const chart7 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description":"Help Resouces popularity",
  "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
  "data": {
    // "url": "https://www.jinruiw.com/dashboard_dataset/sample_general.json",
    "url": "./data/general.json",
    "format":{
      "type": "json",
      "property": "helpResources"
    }
  },
  "mark": {
    "type": "bar",
    "height": {"band": 0.85},
    "tooltip":true
  },
  "encoding": {
    "x": {
      "aggregate": "sum",
      "field": "percbyFeature",
      "axis":{"format": ".0%", "domain":  false, "labelFontSize":12, "grid": true, "gridDash": [6,3]},
      "title": null
    },
    "y": {
      "field": "userType", 
      "axis":{"ticks": false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}, 
      "title":null,
      "sort":["Demo", "Data_Struggler", "SS_Explorer", "MS_Explorer"]
      },
    "color": {
      "field": "helpResource"
    }
  }
,

"config":{
  "axis": {"ticks":false},
  "view": {"stroke": "transparent"}
}
  };
      vegaEmbed("#chart7", chart7, {mode: "vega-lite", actions:false}).then(console.log).catch(console.warn);