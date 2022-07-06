const chart4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
   "height": "container",
   "autosize": { "type": "fit", "contains": "padding", "resize":true },
       "data": {
       "url": "https://gist.githubusercontent.com/HalcyonWjr/598fa622089110aae833b637edbacda5/raw/1762e78f003e08d29c8995cf738ff69e918bf346/db_fulldata.json",
       "format":{
         "type": "json",
         "property": "returnRate"
       }
     },
       "transform": [
         {
           "calculate": "datum.returning/(datum.returning+datum.nonReturning)",
           "as": "rate"
         }
       ],
       "mark": {"type": "line", "color":"#007AFF"},
       "encoding": {
         "x": {"field": "date", "type": "temporal", "title": null, "axis":{ "labelFontSize":12}},
         "y": {
           "field": "rate",
           "type": "quantitative",
           "title": null,
           "scale": {"domain": [0, 1]},
           "axis":{"format": ".0%", "domain":  false, "labelFontSize":12, "grid": true, "gridDash": [6,3]},
         }
       },
     "config": {
         "axis": {"grid": false, "tickBand": "extent", "ticks":false},
         "view": {"stroke": "transparent"}
       }
  };
      vegaEmbed("#chart4", chart4, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);