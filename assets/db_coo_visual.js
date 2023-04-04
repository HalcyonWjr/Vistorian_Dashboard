const coo_visual = {
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
      "property": "coordinated.Fomatting"
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
        "sort": {"field": "value", "order":"descending"},
        "axis":{"labelAlign":"left", "labelPadding":80, "ticks":false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}},
      "x":{"field":"value", "type":"quantitative", "axis":null, "stack": null}
    },
  
    "layer": [{
        "mark": {"type": "bar", "color": "#CFE6FF"},
        "encoding": {"x": {"field": "value", "type":"quantitative"}}
      },
      {
        "mark": {"type": "text", "align": "left", "dx": 6},
        "encoding": {"text": {"field": "value", "type": "quantitative"}}
      }],
  
      "config": {
      "axis": {"grid": false, "tickBand": "extent", "ticks":false},
      "view": {"stroke": "transparent"}
    }
  };
  
  vegaEmbed("#coo_visual", coo_visual, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);