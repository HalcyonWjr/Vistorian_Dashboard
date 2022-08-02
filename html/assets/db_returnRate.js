const chart4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
   "height": "container",
   "autosize": { "type": "fit", "contains": "padding", "resize":true },
       "data": {
       "url": "https://gist.githubusercontent.com/HalcyonWjr/6c0d47a52e10cf2903c7324dc0814bef/raw/919b61f9fc89e8a74ab4edb02d3744eb0764b700/db_data_real.json",
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
       "mark": {"type": "line", "color":"#007AFF", "tooltip": true},
       "encoding": {
         "x": {
          "field": "date", 
          "timeUnit": "yearmonth", 
          "type": "temporal", 
          "title": null, 
          "axis":{"format":"%b", "labelFontSize":12}},
         "y": {
           "field": "rate",
           "type": "quantitative",
           "title": null,

           "axis":{"format": ".0%", "domain":  false, "labelFontSize":12, "grid": true, "gridDash": [6,3]},
         }
       },
     "config": {
         "axis": {"grid": false, "tickBand": "extent", "ticks":false},
         "view": {"stroke": "transparent"}
       }
  };
      vegaEmbed("#chart4", chart4, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);