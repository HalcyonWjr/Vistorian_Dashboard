const matrix_time = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "average session time per visualization",
  "width": "container",
"height": "container",
"autosize": { "type": "fit", "contains": "padding", "resize":true },
"data": {
  "url": "https://gist.githubusercontent.com/HalcyonWjr/acf7420c671a478f65dbf6f88f6045e5/raw/3467fe24509450f745013d02ab6f35bc348af65b/data_visualization.json",
  "format":{
    "type": "json",
    "property": "matrix.averageSessionTime"
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
  
  vegaEmbed("#matrix_time", matrix_time, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);