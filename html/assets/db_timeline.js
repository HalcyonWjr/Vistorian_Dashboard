const chart5 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": "container",
  "autosize": { "type": "pad", "contains": "padding" },
  "data": {
    "url": "https://gist.githubusercontent.com/HalcyonWjr/89b0aefefec049e66c990c9a7775785f/raw/a566e1ab538ce75f243da3c89712e9bc8b2f00df/annotatedTimeline.json",
    "format": {"type": "json", "property": "timeline"}
  },
  "encoding": {
    "y": {
      "type": "quantitative",
      "axis": {"domian": false, "domainOpacity":0, "grid": true, "gridDash":[20,5]},
      "scale": {"domain": [0, 130]}
    },
    "x": {"type": "quantitative"}
  },
  "layer": [
    {
      "mark": {"type": "bar", "color": "#F2F2F2"},
      "encoding": {
        "x": {
          "field": "week",
          "type": "ordinal",
          "axis": {"offset": 30, "tickOffset": -10, "title":null,  "domainWidth":1.1,"domainColor":"black", "labelFontSize":12}
        },
        "y": {"field": "userNum", "type": "quantitative", "title": null}
      }
    },
    {
      "params": [{"name": "pts", "select": {"type": "point", "fields": ["userType"]}}],
      "mark": {
        "type":"line"
      },
      "encoding": {
        "x": {"field": "week", "type": "ordinal", "title": null, "axis": null},
        "y": {
          "field": "userNum", 
          "aggregate": "sum", 
          "axis": {"ticks": false,  "domian": false, "labelFontSize":12}
        },
        "tooltip": [
          {"field": "week", "type": "ordinal"},
          {"field": "userNum", "type": "quantitative"}],
        "color": {
          "condition":{
          "param": "pts",
          "field": "userType",
          "scale": {"range": ["#89C1FF", "#459EFF","#007AFF","#0067D8"]},
          "type": "nominal",
          "legend": {"orient": "none","legendX":-140,"legendY": 20, "titleFontSize": 12, "labelFontSize":12}
          },
          "value": "#B4B4B4"
        },
        "size":{
									"condition":  [{ "param": "pts", "empty": false , "value": 5 }],
									"value": 2
							}
      }
    },
    {
      "data": {
        "values": [
          {
            "category": "workshops",
            "start": 6,
            "end": 7,
            "index": 0,
            "numOfAttendees": 23,
            "title": "ws1"
          },
          {
            "category": "workshops",
            "start": 20,
            "end": 21,
            "index": 1,
            "numOfAttendees": 33,
            "title": "ws3"
          },
          {
            "category": "workshops",
            "start": 42,
            "end": 43,
            "index": 2,
            "numOfAttendees": 33,
            "title": "ws2"
          },
          {
            "category": "courses",
            "start": 23,
            "end": 26,
            "index": 3,
            "numOfAttendees": 24,
            "title": "course_A"
          },
          {
            "category": "courses",
            "start": 31,
            "end": 36,
            "index": 4,
            "numOfAttendees": 24,
            "title": "course_B"
          }
        ]
      },
      "transform": [
        {"calculate": "-4", "as": "y"},
        {"calculate": "-19", "as": "offset"}
      ],
      "mark": {"type": "bar"},
      "encoding": {
        "x": {
          "field": "start",
          "type": "ordinal",
          "axis": null
          // "axis": {
          //   "tickCount": 16,
          //   "tickSize": 30,
          //   "offset": -230,
          //   "labels": false,
          //   "tickColor": "#ddd",
          //   "title": null,
          //   "tickOffset": -10
          // }
        },
        "x2": {"field": "end"},
        "y": {"field": "y"},
        "y2": {"field": "offset"},
        "tooltip": [
          {"field": "category", "type": "nominal"},
          {"field": "start", "type": "quantitative"},
          {"field": "end", "type": "quantitative"},
          {"field": "numOfAttendees", "type": "quantitative"}
          ],
        "fill": {
          "field": "category",
          "scale": {"range": ["#7000FF", "#00FFC2"]},
          "legend": {"orient": "none","legendX":-140, "legendY": 110, "titleFontSize": 12, "labelFontSize":12}
        }
      }
    }
  ],
  "resolve": {"axis": {"x": "independent"}, "scale": {"color": "independent"}},
    "config": {
        "axis": {"grid": false, "tickBand": "extent", "ticks":false},
        "view": {"stroke": "transparent"}
      }
  };
      vegaEmbed("#chart5", chart5, {mode: "vega-lite",actions:false}).then(console.log).catch(console.warn);