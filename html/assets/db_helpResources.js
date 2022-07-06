const chart7 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description":"Help Resouces popularity",
  "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
  "data": {
    "url": "https://gist.githubusercontent.com/HalcyonWjr/598fa622089110aae833b637edbacda5/raw/1762e78f003e08d29c8995cf738ff69e918bf346/db_fulldata.json",
    "format":{
      "type": "json",
      "property": "helpResources"
    }
  },
  "mark": {
    "type": "bar",
    "tooltip":true
  },
  "encoding": {
    "x": {
      "aggregate": "sum",
      "field": "usagePerc",
      "axis":{"format": ".0%", "domain":  false, "labelFontSize":12, "grid": true, "gridDash": [6,3]},
      "title": null
    },
    "y": {"field": "helpResource", "axis":{"ticks": false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}, "title":null},
    "color": {
      "field": "userType",
      "scale": {"range": ["#CFE6FF", "#E8F3FF", "#489FFF", "#8EC4FF"]}
    }
  }
,

"config":{
  "axis": {"ticks":false},
  "view": {"stroke": "transparent"}
}
  };
      vegaEmbed("#chart7", chart7, {mode: "vega-lite", actions:false}).then(console.log).catch(console.warn);