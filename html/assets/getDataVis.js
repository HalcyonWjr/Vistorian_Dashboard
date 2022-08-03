const visData_Url = 'https://gist.githubusercontent.com/HalcyonWjr/acf7420c671a478f65dbf6f88f6045e5/raw/3467fe24509450f745013d02ab6f35bc348af65b/data_visualization.json';

async function getVisData() {
   const response = await fetch(visData_Url);
   const visData = await response.json();
   console.log(visData);

   var newDict = {};

   for (let viewIndex in visData) {
    let view = viewIndex;
    let userNum = visData[viewIndex].userNumber;
    let sessionTime = visData[viewIndex].averageSessionTime;
    // console.log(userNum, sessionTime);

    var count = 0;
    var totalTime = 0;
    var aveTime = 0;

    for (i = 0; i < 12; i++) {
        count += userNum[i].userNum;
        totalTime += sessionTime[i].sessionTime;
    }

    aveTime = ( totalTime / 12 ).toFixed(2);
    
    // newArr.push({viewName: view, viewUser: count, viewTime: aveTime});
    newDict[view] = {viewUser: count, viewTime: aveTime};

   }
   
   console.log(newDict);
   console.log(newDict["nodelink"]["viewUser"]);

   document.getElementById('nlUserNum').textContent = newDict["nodelink"]["viewUser"];
   document.getElementById('nlTime').textContent = newDict["nodelink"]["viewTime"];

   document.getElementById('timelineUserNum').textContent = newDict["timeline"]["viewUser"];
   document.getElementById('timelineTime').textContent = newDict["timeline"]["viewTime"];

   document.getElementById('matrixUserNum').textContent = newDict["matrix"]["viewUser"];
   document.getElementById('matrixTime').textContent = newDict["matrix"]["viewTime"];

   document.getElementById('geoUserNum').textContent = newDict["geolocation"]["viewUser"];
   document.getElementById('geoTime').textContent = newDict["geolocation"]["viewTime"];

   document.getElementById('cooUserNum').textContent = newDict["coordinated"]["viewUser"];
   document.getElementById('cooTime').textContent = newDict["coordinated"]["viewTime"];


};

getVisData();