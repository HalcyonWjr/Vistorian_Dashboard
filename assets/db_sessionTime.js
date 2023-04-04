const chart3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
      // "url": "https://www.jinruiw.com/dashboard_dataset/sample_general.json",
      "url": "./data/general.json",
      "format":{
        "type": "json",
        "property": "averageSessionTime.value"
      }
    },
  "facet": {
    "row": {
      "field": "userType", "type": "nominal", "title": null,
      "sort": ["demo", "data_struggler", "ss_explorer", "ms_explorer"],
      "header": null
      // "header": {"labelAngle": 0, "labelAlign":"left", "labelFontSize":12}
    }
  },
  "spacing": 2,
  "spec": {
      "width":300,
      "layer": [
        {
          "mark": {"type": "rule"},
          "encoding": {
            "x": {
              "field": "min",
              "type": "quantitative",
              "scale": {"zero": false},
              "title": null,
              "axis":{"labelFontSize":11, "ticks": false}
            },
            "x2": {"field": "max"}
          }
        },
        {
          "mark": {"type": "bar", "size": 20, "stroke":"black", "tooltip": {"content": "data"}},
          "encoding": {
            "x": {"field": "q1", "type": "quantitative"},
            "x2": {"field": "q3"},
            "color": {
              "field": "userType",
              "type": "nominal",
              "legend": null,
              "scale": {
                "range": ["#CFE6FF", "#E8F3FF", "#489FFF", "#8EC4FF"]
              }
            }
          }
        },
        {
          "mark": {"type": "tick", "color": "black", "size": 20,"width":2},
          "encoding": {"x": {"field": "ave", "type": "quantitative"}}
        }
      ]
  },
  "resolve": {"scale": {"x": "independent"}},
  "config": {"tick": {"thickness": 2}, "view": {"stroke": "transparent"}}
    };
        vegaEmbed("#chart3", chart3, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);