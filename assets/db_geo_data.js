const geo_data = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Visual Representation",
    "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
  "data": {
    // "url": "https://www.jinruiw.com/dashboard_dataset/dashboard_vis.json",
    "url": "./data/vis.json",
    "format":{
      "type": "json",
      "property": "geolocation.dataFiltering"
    }
  },
  
    "encoding":{
      "y": {
        "field":"category", 
        "type":"nominal", 
        "title":null,
        "scale": {
          "paddingInner": 0.2,
          "paddingOuter": 0.3
        },
        "sort": {"field": "count", "order":"descending"},
        "axis":{"labelAlign":"left", "labelPadding":85, "ticks":false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}},
      "x":{"field":"count", "type":"quantitative", "axis":null, "stack":null}
    },
  
    "layer": [{
        "mark": {"type": "bar", "color": "#CFE6FF"},
        "encoding": {"x": {"field": "count", "type":"quantitative"}}
      },
      {
        "mark": {"type": "text", "align": "left", "dx": 6},
        "encoding": {"text": {"field": "count", "type": "quantitative"}}
      }],
  
      "config": {
      "axis": {"grid": false, "tickBand": "extent", "ticks":false},
      "view": {"stroke": "transparent"}
    }
  };
  
  vegaEmbed("#geo_data", geo_data, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);



// const geo_data = {
//   "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
// "description": "Data filtering",
// "width": "container",
// "height": "container",
// "autosize": { "type": "fit", "contains": "padding", "resize":true },
// "data": {
//   "url": "https://www.jinruiw.com/dashboard_dataset/dashboard_vis.json",
//   "format":{
//     "type": "json",
//     "property": "geolocation.dataFiltering"
//   }
// },

// "encoding":{
//   "y": {
//     "field":"category", 
//     "type":"nominal", 
//     "title":null,
//     "sort": {"field": "value", "order":"descending"},
//     "scale": {
//       "paddingInner": 0.2,
//       "paddingOuter": 0.3
//     },
//     "axis":{"labelAlign":"left", "labelPadding":80, "ticks":false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}},
//   "x":{"field":"value", "type":"quantitative", "axis":null, "stack":false}
// },

// "layer": [{
//     "mark": {"type": "bar", "color": "#EFEFEF"},
//     "encoding": {"x": {"field": "scale", "type":"quantitative"}}
//   },{
//     "mark": {"type": "bar", "color": "#CFE6FF"},
//     "encoding": {"x": {"field": "value", "type":"quantitative"}}
//   },{
//     "mark": {
//     "type": "text",
//     "align": "left",
//     "dx": 10
//   },
//   "encoding": {
//     "text": {
//       "field": "value", 
//       "type": "quantitative", 
//       "format": ".2%", 
//       "formatType": "number"}}
//   }],

//   "config": {
//   "axis": {"grid": false, "tickBand": "extent", "ticks":false},
//   "view": {"stroke": "transparent"}
// }
// };

// vegaEmbed("#geo_data", geo_data, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);