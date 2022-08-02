# Vistorian Dashboard
This repository is for my ongoing MSc disseration.  The topic is to design an analytic dashboard for [Vistorian](https://vistorian.net/), an online network visualization tool.

## Content
Currently this repo is for sharing codes within the team: 

### Data

[**Data**](https://github.com/HalcyonWjr/Vistorian_Dashboard/tree/master/data) folder stores the data template for each chart used in the dashboard. The current data are in json files format.

### Vega-lite charts

[**Charts-vegalite**](https://github.com/HalcyonWjr/Vistorian_Dashboard/tree/master/charts-vegalite) folder contains all the chart implemented in vega-lite, a json grammar for generating visualizations. To view the rendered interactive charts, one should copy all the codes in a file, and paste them in [**Vega-lite online editor**](https://vega.github.io/editor/#/custom/vega-lite) , it would automatically render. If it doesn't work, just click the run button on top. (Note: for final usage, I changed some of the charts' styles in html folder -> assets)

### Dashboard implementation

[**Html**](https://github.com/HalcyonWjr/Vistorian_Dashboard/tree/master/html) folder contains all implementations, so far I've done general page all charts with updated style configs, and part of visualization page. 

- **General page:** [Index.html](https://github.com/HalcyonWjr/Vistorian_Dashboard/blob/master/html/index.html) 
- **Visualization page:** [page_visualization.html](https://github.com/HalcyonWjr/Vistorian_Dashboard/blob/master/html/page_visualization.html)
- **User activity timeline:** [page_userTimline_static.html](https://github.com/HalcyonWjr/Vistorian_Dashboard/blob/master/html/page_userTimline_static.html) The updated version is static with all visual elements available. Still working on the interactive features.


Last edited: 2nd Aug, 2022. @Jinrui
