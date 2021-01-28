//  https://github.com/Masudchy95/javascript-problem-solving

// Task-01: Convert the value of kilometer to meter.

function kilometerToMeter(kilometer){
    var meter = (kilometer * 1000);
    if(kilometer >= 1){
        return meter;
    }
    else{
        return "Error - KiloMeter never be negative";
    }  
}
//  var result = kilometerToMeter(20);
//  console.log(result);


// Task-02:Find out the total budget for buying different items of different prices.

var watchPrice = 50;
var mobilePrice = 100;
var laptopPrice = 500;
function budgetCalculator(watch, mobile, laptop){
    var watchCost = (watch * watchPrice);
    var mobileCost = (mobile * mobilePrice);
    var laptopCost = (laptop * laptopPrice);
    var totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;
}
// var result = budgetCalculator(2, 10, 2);
// console.log(result);


// Task-03: Find out the total cost of staying total no.of days at hotel.

function hotelCost(days){
    var cost = 0;       
    if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        var first10Days = 10 * 100;
        var remainingDays = days - 10;
        var second10Days = remainingDays * 80;
        cost = first10Days + second10Days;
    }
    else{
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remainingDays = days - 20;
        var lastRemainingDays = remainingDays * 50;
        cost = first10Days + second10Days + lastRemainingDays;
    }
    return cost;
}
// var totalCost = hotelCost(20);
// console.log(totalCost);


// Task-04: Find out the longest word from an array.

function megaFriend(friendName){
    var largestName= " ";
    for (i=0; i < friendName.length; i++){
        if (friendName[i].length > largestName.length){
          largestName = friendName[i];
        }
    }
    return largestName;
  }
var result = megaFriend(["Salam", "Baraaaakat", "Rafique", "Jabbar", "Hamid", "Jahangir"]);
console.log(result);
