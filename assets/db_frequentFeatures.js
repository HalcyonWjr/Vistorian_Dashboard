const chart6 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Bar chart with text labels. Set domain to make the frame cover the labels.",
  "width": "container",
  "height": "container",
  "autosize": {"type": "fit", "contains": "padding", "resize": true},
 "data": {
    // "url": "https://www.jinruiw.com/dashboard_dataset/sample_general.json",
    "url": "./data/general.json",
    "format":{
      "type": "json",
      "property": "frequentVisitedFeatures"
    }
  },
  "encoding": {
    "y": {
      "field": "category",
      "sort": {"field": "rank"},
      "title": null,
      "axis": {
        "ticks": false,
        "zindex": 1,
        "domainWidth": 1.2,
        "domainColor": "black",
        "labelFontSize": 12
      }
    },
    "x": {
      "field": "count",
      "type": "quantitative",
      "axis": {
        "domain": false,
        "labelFontSize": 12,
        "grid": true,
        "gridDash": [6, 3]
      },
      "title": null
    },
    "yOffset": {"field": "userType", "sort": ["ss_explorer", "ms_explorer"]},
    "color": {"field": "userType", "scale": {"range": ["#489FFF", "#8EC4FF"]}}
  },
  "layer": [
    {"mark": {"type": "bar", "tooltip": true}},
    {
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "middle",
        "dx": 3,
        "fill": "black"
      },
      "encoding": {"text": {"field": "count", "type": "quantitative"}}
    }
  ],
  "config": {
    "axis": {"grid": false, "ticks": false},
    "view": {"stroke": "transparent"}
  }
};
      vegaEmbed("#chart6", chart6, {mode: "vega-lite", actions:false}).then(console.log).catch(console.warn);