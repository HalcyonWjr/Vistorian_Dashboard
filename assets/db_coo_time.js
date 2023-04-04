const coo_time = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "average session time per visualization",
  "width": "container",
"height": "container",
"autosize": { "type": "fit", "contains": "padding", "resize":true },
"data": {
  // "url": "https://www.jinruiw.com/dashboard_dataset/dashboard_vis.json",
  "url": "./data/vis.json",
  "format":{
    "type": "json",
    "property": "coordinated.averageSessionTime"
  }
},

  "mark": {
    "type": "area",
    "line": {
      "color": "#007AFF"
    },
    "tooltip":true,
    "color": {
      "x1": 1,"y1": 1,"x2": 1,"y2": 0,
      "gradient": "linear",
      "stops": [
        {"offset": 0,"color": "white"},
        {"offset": 1,"color": "#CFE6FF"}
      ]
    }
  },
  "encoding": {
    "x": {
      "field": "date",
      "timeUnit":"yearmonth",
      "type": "temporal",
      "title":null,
      "axis":{"domainWidth":1.2, "domainColor":"black", "labelFontSize":12}
    },
    "y": {
      "field": "sessionTime",
      "type": "quantitative",
      "title":null,
      "axis":{"domain": false,"domainOpacity":0, "grid": true, "labelFontSize":12}
    }
  },

  "config":{
    "axis": {"grid": false, "ticks":false},
    "view": {"stroke": "transparent"}
  }
};
  
  vegaEmbed("#coo_time", coo_time, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);