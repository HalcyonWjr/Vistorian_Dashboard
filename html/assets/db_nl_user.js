const nl_user = {
"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "bar miniture chart of user number per visualization",
  "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
  "data": {
    "url": "https://gist.githubusercontent.com/HalcyonWjr/acf7420c671a478f65dbf6f88f6045e5/raw/3ec48e6c356e3a53988ea235eea38af1b277505f/vis_nl.json",
    "format":{
      "type": "json",
      "property": "userNumber"
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
        vegaEmbed("#nl_user", nl_user, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);


