const chart5 ={
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": "container",
  "autosize": { "type": "pad", "contains": "padding" },
  "data": {
    "url": "./data/general.json",
    "format":{
      "type": "json",
      "property": "timeline"
    }
  },
  "encoding": {
    "y": {
      "type": "quantitative",
      "axis": {"domainOpacity": 0, "grid": true, "gridDash": [20, 5]},
      "scale": {"domain": [0, 180]}
    }
  },
  "layer": [
    {
      "mark": {"type": "bar", "color": "#F2F2F2"},
      "encoding": {
        "x": {
          "field": "date",
          "timeUnit": "yearweek",
          "type": "ordinal",
          "axis": {
            "offset": 30,
            "tickOffset": -10,
            "title": null,
            "domainWidth": 1.1,
            "domainColor": "black",
            "labelFontSize": 12,
            "format": "%b %y"
          }
        },
        "y": {"field": "count", "type": "quantitative", "title": null}
      }
    },
    {
      "params": [
        {"name": "pts", "select": {"type": "point", "fields": ["userType"]}}
      ],
      "mark": {"type": "line"},
      "encoding": {
        "x": {
          "field": "date",
          "timeUnit": "yearweek",
          "type": "ordinal",
          "title": null,
          "axis": null
        },
        "y": {
          "field": "count",
          "aggregate": "sum",
          "axis": {"ticks": false, "domain": false, "labelFontSize": 12}
        },
        "tooltip": [
          {"field": "date", "timeUnit": "yearweek", "format": "%d %b %y"},
          {"field": "count", "type": "quantitative"},
          {"field": "userType", "type": "nominal"}
        ],
        "color": {
          "condition": {
            "param": "pts",
            "field": "userType",
            "sort": ["Demo", "Data_Struggler", "SS_explorer", "MS_Explorer"],
            "scale": {"range": ["#89C1FF", "#459EFF", "#007AFF", "#0067D8"]},
            "type": "nominal",
            "legend": {
              "orient": "none",
              "legendX": -140,
              "legendY": 20,
              "titleFontSize": 12,
              "labelFontSize": 12
            }
          },
          "value": "#B4B4B4"
        },
        "size": {
          "condition": [{"param": "pts", "empty": false, "value": 5}],
          "value": 2
        }
      }
    },
    {
      "data": {
        // "url": "https://www.jinruiw.com/dashboard_dataset/dashboard_events.json",
        "url": "./data/events.json",
        "format":{
          "type": "json"
        }
      },
      "transform": [
        {"calculate": "-3", "as": "y"},
        {"calculate": "-27", "as": "offset"}
      ],
      "mark": {"type": "bar"},
      "encoding": {
        "x": {
          "field": "start",
          "type": "temporal",
          "timeUnit": "yearweek",
          "axis": null
        },
        "y": {"field": "y"},
        "y2": {"field": "offset"},
        "tooltip": [
          {"field": "category", "type": "nominal"},
          {"field": "start", "timeUnit": "yearweek", "format": "%d %b %y"},
          {"field": "numOfAttendees", "type": "quantitative"}
        ],
        "fill": {
          "field": "category",
          "scale": {"range": ["#7000FF", "#00FFC2","#E36DC9"]},
          "legend": {
            "orient": "none",
            "legendX": -140,
            "legendY": 110,
            "titleFontSize": 12,
            "labelFontSize": 12
          }
        }
      }
    }
  ],
  "resolve": {"axis": {"x": "independent"}, "scale": {"color": "independent"}},
  "config": {
    "axis": {"grid": false, "tickBand": "extent", "ticks": false},
    "view": {"stroke": "transparent"}
  }
};
      vegaEmbed("#chart5", chart5, {mode: "vega-lite",actions:false}).then(console.log).catch(console.warn);