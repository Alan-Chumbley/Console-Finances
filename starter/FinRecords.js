var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

//hints from Jung
// var months = finances [0];
// console.log(months);



//only need one FOR loop


//1.total number of months in data set

// var totalMonths = finances.length;
// console.log("Total Months : " + totalMonths);

// //2.total Profit/Loss over entire period

// var revenue = 0; // I have to enable a global startpoint

// //for loop to add all numbers in the array

// for ( var i = 0; i< finances.length;  i++) {
//   var monthData=finances[i]; //finances here means that i[] is adding
//   var financialValue = monthData[1];
//   revenue += financialValue; 

// }
// console.log("Total : $" + revenue);


// //3.average changes of Profit/Loss over entire period

// var average = (revenue/ (totalMonths-1));
// console.log("Average Change : " + average );


// // greatest increase in data
// var maxIncrease = 0;
// var maxIncreaseDate = ""; 

// for (var i = 1; i < finances.length; i++) {
//   var currentMonth = finances[i];
//   var previousMonth = finances[i - 1];

//   var currentProfit = currentMonth[1];
//   var previousProfit = previousMonth[1];

//   var increase = currentProfit - previousProfit;

//   if (increase > maxIncrease) {
//     maxIncrease = increase;
//     maxIncreaseDate = currentMonth[0];
//   }
// }

// console.log("Greatest Date with Increase in Profit: " + maxIncreaseDate);
// console.log("Greatest Increase in Profit: $ " + maxIncrease);

// //greatest decrease in profit loses
// var maxLoss = 0;
// var maxLossDate = "";

// for (var i = 1; i < finances.length; i++) {
//   var currentMonth = finances[i];
//   var previousMonth = finances[i - 1];

//   var currentProfit = currentMonth[1];
//   var previousProfit = previousMonth[1];

//   var loss = previousProfit - currentProfit; // Calculate the loss

//   if (loss > maxLoss) {
//     maxLoss = loss;
//     maxLossDate = currentMonth[0];
//   }
// }

// console.log("Greatest Date with Greatest Loss:  " + maxLossDate);
// console.log("Greatest Loss: $" + maxLoss)

//TOTAL MONTHS ==================


  var totalMonths = finances.length;
  console.log("TOTAL MONTHS: "+ totalMonths);

//TOTAL NET AMOUNT OF PROFIT /LOSS ==================


  var total = 0; // starting point of 0 to + to
  for (var i = 0; i < finances.length; i++) {
    var monthAmount = finances[i][1]; // defining where data is.0,1 but LOOP has to go through i first
    total += finances[i][1]; // add value of finances to current value of toal and then store back to the running total 0
  
  }


console.log("TOTAL:$ " + total);

//Average change =================================

// var maxIncrease = 0;
// var maxDate = ""; 


// for (var i = 1; i < finances.length; i++) {
//   totalMonths++;
//   if (totalMonths > 1) {
//     totalChange += finances[i][1] - finances[i - 1][1]; 
//     var averageChange = totalChange / (numberOfMonths - 1);
// console.log("The average change is: " + averageChange.toFixed(2));// slack channel discussion
//   }
// }

// G  REATEST INCREASE =============================
var maxIncrease = 0;
var maxIncreaseDate = ""; 

for (var i = 1; i < finances.length; i++) {
  var currentMonth = finances[i];
  var previousMonth = finances[i - 1]; // go back to previous
//state where profit lies within finances
  var currentProfit = currentMonth[1]; 
  var previousProfit = previousMonth[1];

  // use ^ to find increase 
  var increase = currentProfit - previousProfit; 

  if (increase > maxIncrease) {
    maxIncrease = increase;
    maxIncreaseDate = currentMonth[0];
  }
}

console.log("Greatest Date with Increase in Profit: " + maxIncreaseDate);
console.log("Greatest Increase in Profit: $ " + maxIncrease);

//GREATEST DECREASE =================================
var maxLoss = 0;
var maxLossDate = "";

for (var i = 1; i < finances.length; i++) {
 var currentMonth = finances[i];
 var previousMonth=  finances[i-1];

  };


console.log("Greatest Date with Greatest Loss:  " + maxLossDate);
console.log("Greatest Loss: $" + maxLoss)