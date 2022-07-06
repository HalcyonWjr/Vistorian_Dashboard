const data_Url = 'https://gist.githubusercontent.com/HalcyonWjr/598fa622089110aae833b637edbacda5/raw/1762e78f003e08d29c8995cf738ff69e918bf346/db_fulldata.json'

async function getData() {
   const response = await fetch(data_Url);
   const data = await response.json();

   // chart1
   const totalSession = data.userComposition.total;
   document.getElementById('totalSession').textContent = totalSession;

   //chart2
   const userPerDay = data.usersOnline.perDay;
   const userPerWeek = data.usersOnline.perWeek;
   const userPerMonth = data.usersOnline.perWeek;
   
   document.getElementById('userPerDay').textContent = userPerDay;
   document.getElementById('userPerWeek').textContent = userPerWeek;
   document.getElementById('userPerMonth').textContent = userPerMonth;

   //chart3
   // JSON里要加一个在average session time里 "allUser":200
   const aveSessionTime = data.averageSessionTime.allUser;
   document.getElementById('aveSessionTime').textContent = aveSessionTime;
   
   //chart4
   const returnUsers = data.returningUsers[0].value;
   const nonReturnUsers = data.returningUsers[1].value;

   document.getElementById('returnUsers').textContent = returnUsers;
   document.getElementById('nonReturnUsers').textContent = nonReturnUsers;

}

getData();


const visData_Url = 'https://gist.githubusercontent.com/HalcyonWjr/acf7420c671a478f65dbf6f88f6045e5/raw/3ec48e6c356e3a53988ea235eea38af1b277505f/vis_nl.json'


async function getVisData() {
   const response = await fetch(visData_Url);
   const visData = await response.json();

   // chart_userNum
   var i, nlUserNum = 0;
   for (i = 0; i < 12; i++) {
      nlUserNum += visData.userNumber[i].userNum;
  }
   document.getElementById('userNum').textContent = nlUserNum;

   // //chart_aveTime
   var j, nlTime = 0;
   for (j = 0; j < 12; j++) {
      nlTime += visData.averageSessionTime[j].sessionTime;
  }
   var nlAveTime = nlTime / 12
   var nlAveTime = nlAveTime.toFixed(2); 
   // console.log(nlTime, nlAveTime); 
   document.getElementById('nlTimeSum').textContent = nlAveTime;

}

getVisData();