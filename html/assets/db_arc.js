const chart9 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "width": 100,
      "height": 50,
      "data": {
        "url": "https://gist.githubusercontent.com/HalcyonWjr/6c0d47a52e10cf2903c7324dc0814bef/raw/4b09cee787e53fc610a8fa06950af9b9949fc6a8/db_data_real.json",
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