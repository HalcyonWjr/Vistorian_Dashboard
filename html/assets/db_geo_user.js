const geo_user = {
"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "bar miniture chart of user number per visualization",
  "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
  "data": {
    "url": "https://gist.githubusercontent.com/HalcyonWjr/acf7420c671a478f65dbf6f88f6045e5/raw/3467fe24509450f745013d02ab6f35bc348af65b/data_visualization.json",
    "format":{
      "type": "json",
      "property": "geolocation.userNumber"
    }
  },
  "mark":{
    "type": "bar",
    "color":"#CFE6FF",
    "tooltip":true
  } ,
  "encoding": {
    "x": {
      "field": "date", "type": "temporal", "timeUnit":"month", "title":null,
      "axis":{"domainWidth":1.2, "domainColor":"black", "labelFontSize":12}
    },
    "y": {"field": "userNum", "type": "quantitative", "title":null,
    "axis":{"domainOpacity":0, "grid": true, "lableFontSize":12}}
  },

  "config":{
    "axis": {"grid": false, "ticks":false},
    "view": {"stroke": "transparent"}
  }
    };
        vegaEmbed("#geo_user", geo_user, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);


