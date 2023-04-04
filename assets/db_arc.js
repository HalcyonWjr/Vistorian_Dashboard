const chart9 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "width": 100,
      "height": 50,
      "data": {
        // "url": "https://www.jinruiw.com/dashboard_dataset/sample_general.json",
        "url": "./data/general.json",
        "format":{
          "type": "json",
          "property": "returningUsers"
        }
      },
      "mark": {"type": "arc", "outerRadius": 40, "tooltip":true},
      "encoding": {
        "theta": {"field": "value", "type": "quantitative", "stack": true},
        "color": {
          "field": "category",
          "type": "nominal",
          "scale": {"scheme": "blues"},
          "legend": null
        }
      },
       "config":{
        "axis": {"grid": false, "ticks":false},
        "view": {"stroke": "transparent"}
      }
    };
        vegaEmbed("#chart9", chart9, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);