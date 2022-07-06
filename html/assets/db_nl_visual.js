const nl_visual = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Visual Representation",
    "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
  "data": {
    "url": "https://gist.githubusercontent.com/HalcyonWjr/acf7420c671a478f65dbf6f88f6045e5/raw/3ec48e6c356e3a53988ea235eea38af1b277505f/vis_nl.json",
    "format":{
      "type": "json",
      "property": "Fomatting"
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
        "axis":{"labelAlign":"left", "labelPadding":80, "ticks":false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}},
      "x":{"field":"value", "type":"quantitative", "axis":null}
    },
  
    "layer": [{
        "mark": {"type": "bar", "color": "#CFE6FF"},
        "encoding": {"x": {"field": "value", "type":"quantitative"}}
      },
      {
        "mark": {"type": "text", "align": "left", "dx": -20},
        "encoding": {"text": {"field": "value", "type": "quantitative"}}
      }],
  
      "config": {
      "axis": {"grid": false, "tickBand": "extent", "ticks":false},
      "view": {"stroke": "transparent"}
    }
  };
  
  vegaEmbed("#nl_visual", nl_visual, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);