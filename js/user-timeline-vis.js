
const folderPath = './data/export/'
var dataPath = '';

function reload(folder) {
  dataPath = "./data/combined-logs/" + folder + "/users-combined-update.csv";
  userType = folder
  return dataPath;
  
}

function reloadAndRefresh(folder) {
  // Assign the new dataPath value
  reload(folder); // Replace "demo" with the desired folder name
  // Save the updated dataPath value to localStorage
  localStorage.setItem("dataPath", dataPath);
  localStorage.setItem("userType", userType);
  

  window.location.reload();
}

// When the page loads, retrieve the dataPath value from localStorage (if it exists)
if (localStorage.getItem("dataPath", "userType")) {
  dataPath = localStorage.getItem("dataPath");
  userType = localStorage.getItem("userType");

  if (userType == "demo") {
    document.getElementById('user').innerHTML = "Demo Users"
  }
  else if (userType == "data") {
    document.getElementById('user').innerHTML = "Data Strugglers"
  }
  else if (userType == "ss") {
    document.getElementById('user').innerHTML = "SS Explorers"
  }
  else if (userType == "ms") {
    document.getElementById('user').innerHTML = "MS Explorers"
  }

}

  
var rowConverter = function(d) {
  return {
    usrID: d.usrID,
    session: parseFloat(d.session),
    event: d.event,
    category: d.category,
    index: parseFloat(d.index),
    view:d.view,
    start: parseFloat(d.start),
    end: parseFloat(d.end),
    userSession: parseFloat(d.userSession)
  }; 
}; 

//label vars and transitions
let labels, links, labelArray = [], anchorArray = []; 

d3.csv(dataPath, rowConverter)
    .then(function(myData){
        console.log("myData", myData);

  // calculate session length
  var SessionID = "1"; 
  var loopIndex = 0; 
  var endArr = new Array();

  while(loopIndex < myData.length){
    if((myData[loopIndex]).session != SessionID){
      SessionID = myData[loopIndex].session;
      endArr.push({user:myData[loopIndex-1].usrID, session: myData[loopIndex-1].session, 
        duration:myData[loopIndex-1].end, userSession:myData[loopIndex-1].userSession});
    }
    loopIndex++; 
  }

  endArr.push({user:myData[loopIndex-1].usrID, session: myData[loopIndex-1].session, 
        duration:myData[loopIndex-1].end, userSession:myData[loopIndex-1].userSession});
  console.log(endArr); 

  const getViewArr = (data) => {
  const viewArr = [];
  let currentView = null;
  let viewStart = null;

  data.forEach((item, index) => {
    if (currentView !== item.view) {
      if (currentView) {
        viewArr.push({
          session: data[index - 1].session,
          view: currentView,
          start: viewStart,
          end: data[index - 1].end,
          userSession: data[index - 1].userSession,
        });
      }
      currentView = item.view;
      viewStart = item.start;
    }

    if (index === data.length - 1 && currentView) {
      viewArr.push({
        session: item.session,
        view: currentView,
        start: viewStart,
        end: item.end,
        userSession: item.userSession,
      });
    }
  });

  return viewArr;
};

const viewArr = getViewArr(myData);
console.log(viewArr);

  // color selection API
  function SelectionModel(values) {
    const dispatch = d3.dispatch('change');
    const state = new Set(values);
    
    const api = {
      on:     (type, fn) => (dispatch.on(type, fn), api),
      clear:  () => (clear(), api),
      has:    value => !state.size || state.has(value),
      set:    value => (update(value, true), api),
      toggle: value => (update(value, !state.has(value)), api)
    };
    
    function clear() {
      if (state.size) {
        state.clear();
        dispatch.call('change', api, api);
      }
    }
    
    function update(value, add) {
      if (add && !state.has(value)) {
        state.add(value);
        dispatch.call('change', api, api);
      } else if (!add && state.has(value)) {
        state.delete(value);
        dispatch.call('change', api, api);
      }
    }

    return api;
  }

   const selmodel = SelectionModel();

    // Main view svg variables
    var xScaleDomain = new Array();
    for(let i = 1; i <= d3.max(myData, d => d.session); i++) {xScaleDomain.push(i)};

    const yScaleDomain = [0, d3.max(myData, function (d) {return d.end; })]

    const unitWidth = 200
    const secHeight = 3
    var w = xScaleDomain.length * unitWidth,
        h = Math.round(yScaleDomain[1]) * secHeight,
        yOffset = 10,
        padding = 20; 

    console.log("width", w, "height", h)

    var xScale = d3.scaleBand().domain(xScaleDomain).range([0, w - 50]).paddingInner(0.82).paddingOuter(0.45).align(0.5); 
    var yScale = d3.scaleLinear().domain([0, d3.max(myData, function (d) { return d.end;})]).range([0, h - 70]);
    var bgYScale = d3.scaleLinear().domain([0, d3.max(endArr, function (d) { return d.duration; })]).range([0, h - 70]); 
    var viewYScale = d3.scaleLinear().domain([0, d3.max(viewArr, function (d) {return d.end;})]).range([0, h - 70]); 

    var xAxis = d3.axisTop().scale(xScale).ticks(xScaleDomain.length);
    var yAxis = d3.axisLeft().scale(yScale).ticks(10); 
    var viewYAxis = d3.axisLeft().scale(viewYScale);

    const yAxisSvg = d3.select('.timeline-yaxis')
                      .append("svg")
                        .attr("width", 50)
                        .attr("height", h)
                        
    yAxisSvg.append("rect").attr("width", 50).attr("height", h).attr("fill", "white");
    yAxisSvg.append("g").attr("class", "y-axis").attr("transform", "translate(40,60)").call(yAxis);

    const xAxisSvg = d3.select('.timeline-xaxis')
                        .append("svg")
                        .attr("width", w)
                        .attr("height", 40)
                        
    xAxisSvg.selectAll(".sessionNo")
      .data(endArr)
      .enter()
      .append("text")
        .attr("x", d => (xScale(d.session)))
        .attr("y", 30)
        .text(d => "User" + d.user + "-" + d.userSession);

    
    // Append the svg element                  
    var svg = d3.select(".timeline-chart")
      .append("svg")
      .attr("class", "svg")
      .attr("width", 2800)
      .attr("height", h)
      .attr("id", "timeline")
      .attr("margin", 0);

    // Background layer: the grey bar of total session length
    svg.selectAll(".bgRect")
      .data(endArr)
      .enter()
      .append("rect")
        .attr("width", xScale.bandwidth())
        .attr("height", d => (bgYScale(d.duration)))
        .attr("x", d => (xScale(d.session)))
        .attr("y", yOffset)
        .attr("fill", "#F6F6F6");


    // Visualization views: add texture scale
    var t1 = textures.circles().size(5).lighter();
    var t2 = textures.paths().d("waves").size(6).lighter();
    var t3 = textures.paths().d("squares").size(8).lighter(); 
    var t4 = textures.paths().d("caps").size(8).lighter();
    var t5 = textures.paths().d("woven").lighter().thicker();
    var texture = [t1, t2, t3, t4, t5];   
    texture.forEach((t) => {svg.call(t);});
    var viewDomain = ["Node-LInk", "Timeline", "Matrix", "Map", "Coordinated"];
    textureScale = d3.scaleOrdinal().domain(viewDomain).range(texture);

    // Visualization view: append the bars next to session lane
    svg.selectAll(".networkView")
      .data(viewArr)
      .enter()
      .append("rect")
        .attr("width", xScale.bandwidth() / 2)
        .attr("height", d => (yScale(d.end) - yScale(d.start)))
        .attr("x", d => (xScale(d.session)) - xScale.bandwidth() / 2 - 5)
        .attr("y", d => (yScale(d.start) + yOffset))
        .style("fill", function(d){
            return textureScale(d.view).url();
          })
          
    // Create color lengend
    const eventType = [
      { index: 0, label: "data"},
      { index: 1, label: "visualization"},
      { index: 2, label: "logging"},
      { index: 3, label: "help"},
      { index: 4, label: "communication"},
      { index: 5, label: "error"},
      { index: 6, label: "bookmarking"}
    ]; 

    // Color coding for Event Bars
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    const titlePadding = 20;
    const entrySpacing = 28;
    const entryRadius = 10;
    const labelOffset = 4;
    const baselineOffset = 4;
  
  function colorLegend(container, selmodel) {
    const title = container.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('fill', 'black')
      .attr('font-weight', 'medium')
      .attr('font-size', '16px')
      .text('Event category');
  
  // The "on" method registers event listeners
    const entries = container.selectAll('g')
      .data(eventType)
      .join('g')
        .attr('transform', d => `translate(0, ${titlePadding + d.index * entrySpacing})`)
        .on('click', (e, d) => selmodel.toggle(d.index)) // <-- respond to clicks, register what to detect
        .on('dblclick', () => selmodel.clear());         // <-- respond to double clicks
    
    const symbols = entries.append('circle')
      .attr('cx', entryRadius)
      .attr('r', entryRadius)
      .attr('fill', d => color(d.index));
    
    const labels = entries.append('text')
      .attr('x', 2 * entryRadius + labelOffset)
      .attr('y', baselineOffset)
      .attr('fill', 'black')
      .attr('font-size', '15px')
      .style('user-select', 'none')
      .text(d => d.label);

    // Listen to selection model, update symbol and labels upon changes
    selmodel.on('change.legend', () => {
      symbols.attr('fill', d => selmodel.has(d.index) ? color(d.index) : '#ccc');
      labels.attr('fill', d => selmodel.has(d.index) ? 'black' : '#bbb');
    });
}

  var svgLegend = d3.select(".item_legend")
      .append("svg")
      .attr("width", 150)
      .attr("height", 230);

  var legend = svgLegend.append('g')
      .attr('transform', 'translate(20, 30)')
      .call(container => colorLegend(container, selmodel));
  
  function eventBars(container, selmodel) {
      var events = container
        .selectAll(".eventRect")
        .data(myData)
        .enter()
        .append("rect")
          .attr("width", xScale.bandwidth())
          .attr("width", d => {
            labelArray.push({x: xScale(d.session) + xScale.bandwidth()* 1.1, y: (yScale(d.start) + yScale(d.end)) / 2 + yOffset, name: d.event, width: 0.0, height: 0.0, index: d.index});
            anchorArray.push({x: xScale(d.session) + xScale.bandwidth()* 1.1, y: (yScale(d.start) + yScale(d.end)) / 2 + yOffset, r: yScale(d.end) - yScale(d.start)});
            return xScale.bandwidth()
          })
          .attr("height", d => (yScale(d.end) - yScale(d.start)))
          .attr("x", d => (xScale(d.session)))
          .attr("y", d => (yScale(d.start)) + yOffset)
          .attr("fill", d => (color(d.index)));

      labels = svg
          .selectAll('.label')
          .data(labelArray)
          .enter()
          .append('text')
          .text((d) => d.name)
          .attr('font-family','sans-serif')
          .attr('x',(d,i) => {
            return d.x;
          })
          .attr('y',(d,i) => {
            return d.y;
          })
          .attr('text-anchor','start')
          .attr('font-size',10)
          .attr("fill", "black");
      

      function redrawLabels(){
        labels
          .transition()
          .duration(500)
          .attr("x",(d) => d.x)
          .attr("y",(d) => d.y)
          .attr("fill", "black");

        links
        .transition()
        .duration(500)
        .attr("x2",(d) => d.x)
        .attr("y2",(d) => d.y);
      }

      //Add height and width of label to array
          var i = 0;
          labels.each(function() {
              labelArray[i].width = this.getBBox().width;
              labelArray[i].height = this.getBBox().height;
              i += 1;
          });

        //   console.log(labelArray, anchorArray); 

          //Add links connecting label and circle
          links = svg.selectAll(".link")
          .data(labelArray)
          .enter()
          .append("line")
          .attr("class", "link")
          .attr("x1", (d) => d.x)
          .attr("y1", (d) => d.y)
          .attr("x2", (d) => d.x)
          .attr("y2", (d) => d.y)
          .attr("stroke-width", 0.2)
          .attr("stroke", "#6f6f6f");
      
          //Remove overlaps
        d3.labeler()
          .label(labelArray)
          .anchor(anchorArray)
          .width(w)
          .height(h)
          .start(200);
      
        redrawLabels();

      // Add a selection model listener that updates country colors
      selmodel.on('change.chart', () => {
            events.attr('fill', d => selmodel.has(d.index) ? color(d.index) : '#ccc');
            labels.attr('fill', d => selmodel.has(d.index) ? 'black' : '#bbb');
            });
      }

      var timeline = svg.append('g')
      // .attr('transform', 'translate(20, 30)')
      .call(container => eventBars(container, selmodel)); 

      // add visualization legend
      var view = d3.select(".item_legend")
                    .append("svg")
                    .attr("width", 150)
                    .attr("height", 200);

      var legend2 = view.append('g')
      .attr('transform', 'translate(20, 30)');

      const viewTitle = legend2.append('text')
          .attr('x', 0)
          .attr('y', 0)
          .attr('fill', 'black')
          .attr('font-weight', 'medium')
          .attr('font-size', '16px')
          .text('Visualization view');

      const addLegend = legend2.selectAll('g')
          .data(viewDomain)
          .join('g')
            .attr('transform', (d,i) => `translate(0, ${titlePadding + i * entrySpacing})`);

      const addTexture = addLegend.append('circle')
          .attr('cx', entryRadius) // <-- offset symbol x-position by radius
          .attr('r', entryRadius)
          .style("fill", function(d, i){
            return textureScale(d).url();
          });

      const addLabels = addLegend.append('text')
          .attr('x', 2 * entryRadius + labelOffset) // <-- place labels to the left of symbols
          .attr('y', baselineOffset) // <-- adjust label y-position for proper alignment
          .attr('fill', 'black')
          .attr('font-size', '15px')
          .text(d => d);

    })




