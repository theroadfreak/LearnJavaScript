// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let water = 400   //input("Write how many ml of water the coffee machine has: ");
let milk = 540    //input("Write how many ml of milk the coffee machine has: ");
let beans = 120   //input("Write how many g of coffe beans the coffee machine has: ");
let cups = 9      //input("Write how many cups of coffe you will need: ");
let profit = 550;
let run = true;
// console.log("The coffee machine has: \n" 
//             + water + " ml of water \n"
//             + milk +" ml of milk \n"
//             + beans +" g of coffee beans \n"
//             + cups +" disposable cups \n$"
//             +profit+" of money")
// console.log("\n")

function proveri(w,m,b){
  if (water < w){
    console.log("Sorry, not enough water!")
    return false;
  }
   
  if (milk < m){
    console.log("Sorry, not enough milk!")
    return false;
  }
  if (beans < b){
    console.log("Sorry, not enough coffee beans!")
    return false;
  }
  return true
  
}
while (run) {
  let option = input("Write action (buy, fill, take, remaining, exit):")
  if (option === "buy"){
    
    option = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:")
    
    if (option == "1" && proveri(250,0,16)){
      console.log("I have enough resources, making you a coffee!")
      water -= 250;
      beans -= 16;
      profit += 4;
      cups -= 1;
    }else if (option == "2" && proveri(350,75,20)) {
      console.log("I have enough resources, making you a coffee!")
      water -= 350;
      milk -= 75;
      beans -= 20;
      profit += 7;
      cups -= 1;
    }else if (option == "3" && proveri(200,100,12)){
      console.log("I have enough resources, making you a coffee!")   
      water -= 200;
      milk -= 100;
      beans -= 12;
      profit += 6;
      cups -= 1;
    }
  
  }else if (option === "fill") {
  
    let add = input("Write how many ml of water you want to add:")
    water += parseInt(add);
    add = input("Write how many ml of milk you want to add:")
    milk += parseInt(add);
    add = input("Write how many g of coffee you want to add:")
    beans += parseInt(add);
    add = input("Write how many disposable coffee cups you want to add:")
    cups += parseInt(add);
  
  
  }else if (option === "take"){
    console.log("I gave you $" + profit);
    profit = 0;

  }else if (option === "remaining"){
  console.log("The coffee machine has: \n" 
              + water + " ml of water \n"
              + milk +" ml of milk \n"
              + beans +" g of coffee beans \n"
              + cups +" disposable cups \n$"
              +profit+" of money")
  
  }else if (option === "exit"){
    run = false;
}
console.log("\n")
}
// let totalWater = Math.floor(water / 200);
// let totalMilk = Math.floor(milk / 50);
// let totalBeans = Math.floor(beans / 15);
// let totalCups;

// if (totalCups == 0 && cups>1) {
//   console.log("I can only make 0 cups of coffee")
// }else if (cups == totalCups) {
//   console.log("Yes, I can make that amount of coffee");
// }else if (cups < totalCups) {
//   console.log("Yes, I can make that amount of coffee (and even "+(totalCups-cups)+" more than that)");
// }else{console.log("No, I can only make "+ (totalCups) +" cups of coffee")}



// console.log("For " + inp + " cups of coffee you will need:");
// console.log(200 * inp + " ml of water");
// console.log(50 * inp + " ml of milk");
// console.log(15*inp + "g of coffee beans");