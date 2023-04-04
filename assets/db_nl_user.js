const nl_user = {
"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "bar miniture chart of user number per visualization",
  "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
  "data": {
    // "url": "https://www.jinruiw.com/dashboard_dataset/dashboard_vis.json",
    "url": "./data/vis.json",
    "format":{
      "type": "json",
      "property": "nodelink.userNumber"
    }
  },
  "mark":{
    "type": "bar",
    "color":"#CFE6FF",
    "tooltip":true
  } ,
  "encoding": {
    "x": {
      "field": "date", "type": "temporal", "timeUnit":"yearmonth", "title":null,
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


