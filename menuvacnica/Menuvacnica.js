let input = require('sync-input');

console.log("Welcome to Currency Converter!");
console.log(`1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

let toCurrency;
let fromCurrency;
let amount;
let devide = 0;
let multiply = 0;
let run = true;

function check(curr, typ){
  
  const temp = function (num) {
    if (typ == "from"){
      devide = num;
    }else if (typ == "to"){
      multiply = num;
    }

  };
  
  if (typeof(curr) === 'string'){
    
    switch (curr){
      case "USD": 
        temp(1);
        return true;
        break;
      case "JPY":
        temp(113.5);
        return true;
        break;
      case "EUR":
        temp(0.89);
        return true;
        break;
      case "RUB":
        temp(74.36);
        return true;
        break;
      case "GBP":
        temp(0.75);
        return true;
        break;
      default:
        return false;
    }  
  }
}
//What do you want to do?
// 1-Convert currencies 2-Exit program
//console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
let choice;
while (run){
  console.log("What do you want to do?");
  console.log("1-Convert currencies 2-Exit program");
  choice = input();
  
  if (choice == 1){
  
    console.log("What do you want to convert?");

    fromCurrency = input("From: ").toUpperCase();
//let fromCurency = "USD";
//console.log("Type the currency you wish to convert: USD");
    if (check(fromCurrency, "from")){   
      toCurrency = input("To: ").toUpperCase();  
      if (check(toCurrency, "to")){
        amount = parseInt(input("Amount: "));
    
        if (isNaN(amount)){
          console.log(`The amount has to be a number`)
        }else if (amount < 1){
          console.log("The amount can not be less than 1")  
        }else if (typeof(amount) == 'number') {
          let tmp = ((amount / devide) * multiply).toFixed(4)
          console.log(`Result: ${amount} ${fromCurrency} equals ${tmp} ${toCurrency}`)    
        }else{
          console.log(`The amount has to be a number`)      
      }
      } else{
          console.log("Unknown currency") 
    }
    }else{
      console.log("Unknown currency")
  }
  }else if (choice == 2){
    console.log("Have a nice day!")
    run = false;
  }else{
    console.log("Unknown input")
  }
}
//Type the currency you wish to convert: USD