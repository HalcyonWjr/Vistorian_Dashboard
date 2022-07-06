const chart3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "dashboard general chart3",
    "vconcat": [
      {
        "width": 280,
        "height": 50,
        "data": {
        "url": "https://gist.githubusercontent.com/HalcyonWjr/598fa622089110aae833b637edbacda5/raw/1762e78f003e08d29c8995cf738ff69e918bf346/db_fulldata.json",
        "format":{
          "type": "json",
          "property": "averageSessionTime.value"
        }
      },
      "transform": [
      {"filter": {"field": "userType", "oneOf":["demo", "data_struggler"]}}],
  
        "encoding": {
          "y": {"field": "userType", "type": "nominal", "title": null, "axis": {"ticks": false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}}
        },
        "layer": [
          {
            "mark": {"type": "rule"},
            "encoding": {
              "x": {
                "field": "min",
                "type": "quantitative",
                "scale": {"zero": false},
                "title": null,
                "axis":{"labelFontSize":11}
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
            "encoding": {"x": {"field": "q2", "type": "quantitative"}}
          }
        ]
      },
      {
        "width": 280,
        "height": 50,
        "data": {
        "url": "https://gist.githubusercontent.com/HalcyonWjr/598fa622089110aae833b637edbacda5/raw/1762e78f003e08d29c8995cf738ff69e918bf346/db_fulldata.json",
        "format":{
          "type": "json",
          "property": "averageSessionTime.value"
        }
      },
      "transform": [
      {"filter": {"field": "userType", "oneOf":["ss_explorer", "ms_explorer"]}}],
        "encoding": {
          "y": {"field": "userType", "type": "nominal", "title": null, "axis": {"ticks": false, "zindex": 1, "domainWidth":1.2, "domainColor":"black", "labelFontSize":12}}
        },
        "layer": [
          {
            "mark": {"type": "rule"},
            "encoding": {
              "x": {
                "field": "min",
                "type": "quantitative",
                "scale": {"zero": false},
                "title": null,
                "axis":{"labelFontSize":11}
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
                "legend": null
              }
            }
          },
          {
            "mark": {"type": "tick", "color": "black", "size": 20},
            "encoding": {"x": {"field": "q2", "type": "quantitative"}}
          }
        ]
      }
    ],
      "config": {
        "axis": {"grid": false, "tickBand": "extent", "ticks":false},
        "view": {"stroke": "transparent"}
      }
      };
          vegaEmbed("#chart3", chart3, {mode: "vega-lite", "actions":false}).then(console.log).catch(console.warn);