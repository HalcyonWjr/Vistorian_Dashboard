const chart2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Total User Sessions",
  "width": "container",
  "height": "container",
  "autosize": { "type": "fit", "contains": "padding", "resize":true },
  "data": {
      // "url": "https://www.jinruiw.com/dashboard_dataset/sample_general.json",
      "url": "./data/general.json",
      "format":{
        "type": "json",
        "property": "monthlyUserSessions"
      }
    },
  "layer": [
    {
      "mark": {"type": "bar","cornerRadiusEnd": 3, "color": "#DEDEDE",  "tooltip": true},
      "encoding": {
        "x": {
          "timeUnit": "yearmonth",
          "field": "date",
          "type": "nominal",
          "axis": {"labelAngle": 0, "labelExpr": "datum.label[0]",  "domainWidth":1.2,"domainColor":"black", "labelFontSize":12},
          "title": null
        },
        "y": {"field": "monthlyUser", "type": "quantitative", "title": null, "axis":null}
      }
    },
    {
      "mark": "rule",
      "encoding": {
        "y": {
          "aggregate": "mean",
          "field": "monthlyUser",
          "type": "quantitative"
        },
        "color": {"value": "#007AFF"},
        "size": {"value": 1},
        "strokeDash": {"value": [8, 5]}
      }
    },
    {
      "mark":{"type": "text", "color":"#007AFF", "fontSize":12, "fontWeight":"bold", "baseline":"line-bottom", "dx":-120, "dy": -8},
      "encoding": {
        "text": {"field": "monthlyUser","aggregate": "mean", "type": "quantitative", "format": ".2f"}}
    }
  ],
  "config":{
    "axis": {"grid": false, "ticks":false},
    "view": {"stroke": "transparent"}
  }
  };
      vegaEmbed("#chart2", chart2, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);