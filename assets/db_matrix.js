const chart8 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Time spent user matrix for visualization",
  "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
  "data": {
    // "url": "https://www.jinruiw.com/dashboard_dataset/sample_general.json",
    "url": "./data/general.json",
    "format":{
      "type": "json",
      "property": "userExplorationTime"
    }
  },
  "mark":{
    "type": "rect",
    "tooltip":true,
    "width":{"band": 0.9},
    "height": {"band": 0.9},
    "cornerRadius":5
  },
  "encoding": {
    "y": {
      "field": "userType", 
      "type": "nominal", 
      "sort": ["demo","ds","ss"],
      "axis":{
        "title":null, 
        "offset":5,
        "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}},
    "x": {
      "field": "step", 
      "type": "ordinal",
      "sort": ["HelpResource"],
      "axis":{
        "labelAngle":-20,
        "title":null,
        "offset":5,
        "domainWidth":1.2, "domainColor":"black", "labelFontSize":11}},
        "color": {"field": "duration", "type": "quantitative", "scale": {"scheme": "blues"}, "legend":{"labelFontSize":12}}
  },
  "config": {
    "axis": {"grid": false, "tickBand": "extent", "ticks":false},
    "view": {"stroke": "transparent"}
  }
  };
      vegaEmbed("#chart8", chart8, {mode: "vega-lite", actions: false}).then(console.log).catch(console.warn);