const chart7 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description":"Help Resouces popularity",
  "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
  "data": {
    "url": "https://gist.githubusercontent.com/HalcyonWjr/6c0d47a52e10cf2903c7324dc0814bef/raw/4b09cee787e53fc610a8fa06950af9b9949fc6a8/db_data_real.json",
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
      "field": "percentage",
      "axis":{"format": ".0%", "domain":  false, "labelFontSize":12, "grid": true, "gridDash": [6,3]},
      "title": null
    },
    "y": {
      "field": "userType", 
      "axis":{"ticks": false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}, 
      "title":null,
      "sort":["demo", "data struggler", "ss_explorer", "ms_explorer"]
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