const visData_Url = './data/vis.json';

async function getVisData() {
   const response = await fetch(visData_Url);
   const visData = await response.json();
   console.log(visData);

   var nl_user = visData.Total_num_sessions.nodelink;
   var matrix_user = visData.Total_num_sessions.matrix;
   var timelin_user = visData.Total_num_sessions.timeline;
   var map_user = visData.Total_num_sessions.map;
   var matnl_user = visData.Total_num_sessions.mat_nl;

   var nl_sTime = visData.avg_sTime.nodelink;
   var matrix_sTime = visData.avg_sTime.matrix;
   var timelin_sTime = visData.avg_sTime.timeline;
   var map_sTime = visData.avg_sTime.map;
   var matnl_sTime = visData.avg_sTime.mat_nl;



   document.getElementById('nlUserNum').textContent = nl_user;
   document.getElementById('nlTime').textContent = nl_sTime;

   document.getElementById('timelineUserNum').textContent = timelin_user;
   document.getElementById('timelineTime').textContent = timelin_sTime;

   document.getElementById('matrixUserNum').textContent = matrix_user;
   document.getElementById('matrixTime').textContent = matrix_sTime;

   document.getElementById('geoUserNum').textContent = map_user;
   document.getElementById('geoTime').textContent = map_sTime;

   document.getElementById('cooUserNum').textContent = matnl_user;
   document.getElementById('cooTime').textContent = matnl_sTime;


   

//    var newDict = {};

//    for (let viewIndex in visData) {
//     let view = viewIndex;
//     let userNum = visData[viewIndex].userNumber;
//     let sessionTime = visData[viewIndex].averageSessionTime;
//     // console.log(userNum, sessionTime);

//     var count = 0;
//     var totalTime = 0;
//     var aveTime = 0;

//     for (i = 0; i < 12; i++) {
//         count += userNum[i].userNum;
//         totalTime += sessionTime[i].sessionTime;
//     }

//     aveTime = ( totalTime / 12 ).toFixed(2);
    
//     // newArr.push({viewName: view, viewUser: count, viewTime: aveTime});
//     newDict[view] = {viewUser: count, viewTime: aveTime};

//    }
   
//    console.log(newDict);
//    console.log(newDict["nodelink"]["viewUser"]);

//    document.getElementById('nlUserNum').textContent = newDict["nodelink"]["viewUser"];
//    document.getElementById('nlTime').textContent = newDict["nodelink"]["viewTime"];

//    document.getElementById('timelineUserNum').textContent = newDict["timeline"]["viewUser"];
//    document.getElementById('timelineTime').textContent = newDict["timeline"]["viewTime"];

//    document.getElementById('matrixUserNum').textContent = newDict["matrix"]["viewUser"];
//    document.getElementById('matrixTime').textContent = newDict["matrix"]["viewTime"];

//    document.getElementById('geoUserNum').textContent = newDict["geolocation"]["viewUser"];
//    document.getElementById('geoTime').textContent = newDict["geolocation"]["viewTime"];

//    document.getElementById('cooUserNum').textContent = newDict["coordinated"]["viewUser"];
//    document.getElementById('cooTime').textContent = newDict["coordinated"]["viewTime"];


};

getVisData();