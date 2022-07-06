const chart6 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Frequently visited features",
    "width": "container",
    "height": "container",
    "autosize": { "type": "fit", "contains": "padding", "resize":true },
    "data": {
      "url": "https://gist.githubusercontent.com/HalcyonWjr/598fa622089110aae833b637edbacda5/raw/1762e78f003e08d29c8995cf738ff69e918bf346/db_fulldata.json",
      "format":{
        "type": "json",
        "property": "frequentVisitedFeatures"
      }
    },
    "mark": {
      "type": "bar",
      "tooltip":true
    },
    "encoding": {
      "y": {"field": "category", "sort": {"field": "rank"}, "title": null, 
      "axis":{"ticks": false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}},
      "x": {
        "field": "popularity",
        "type": "quantitative",
        "axis":{"format": ".0%", "domain":  false, "labelFontSize":12, "grid": true, "gridDash": [6,3]},
        "title": null
      },
      "yOffset": {
        "field": "userType",
        "sort": ["ss_explorer", "ms_explorer"]
      },
      "color": {
        "field": "userType",
        "scale": {"range": ["#8EC4FF", "#489FFF"]}
      }
    },
  
    "config":{
      "axis": {"grid": false, "ticks":false},
      "view": {"stroke": "transparent"}
    }
  };
      vegaEmbed("#chart6", chart6, {mode: "vega-lite", actions:false}).then(console.log).catch(console.warn);