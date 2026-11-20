// future proof
// just incase new features are added

const button = document.getElementById("clicker")
let cash = 0;
let mult = 1; let add = 1; let exp = 1; // grouped because they are for 1 formula

let price1 = 1; // add +1 click
let price2 = 2000; // double clicks
let price3 = 30; // +1 passive income
let price4 = 450; // increase passive income speed
let price5 = 1000000; // reset
let price6 = 100; // +5 per click
let price7 = 1200; // double passive income

let income = 0; let time = 2000; let passive_double = 1; // passive income group


// don't use ^ for exponent, also the 1 + add screws stuff up because it isn't BigInt
let earn = ((mult * add) ** exp);
button.addEventListener("click", function(){
    cash += earn;
    document.getElementById("clicker").innerHTML = "monies: " + String(comma(cash)) + "<br>click for $$$";
});

// ex: 1000000 --> 1,000,000
//      input       output
//
// still no idea how i did this shit just locked in at 11 pm
function comma(num){
    // probably need 3 variables to swap around stuff
    let num_comma = String(num).slice(0, -3);
    let extra = String(num).slice(-3);
    let old = "";
    for(let i = num; i >= 1000; i){

        // if i > 1000, take everything up until last 3 spaces, add comma, add back last 3.
        old = num_comma;
        extra = String(old).slice(-3)+ "," + extra;

        i = num_comma;

        num_comma = num_comma.slice(0, -3);

    }
    // just fixed this function to work perfectly, IDFK WHAT THE HELL IM DOING ANYMORE!
    // probably defined about 2 extra variables, but i don't dare to touch it,
    // since it was so hard to make and I do not want to accidentally ruin it again.
    return extra;
}





//use for every upgrade button, so make it flexible... maybe it's gotten too flexible.
function buy(ID, price, addition, multiply, power, A, B, C, msg, P, speed, P_double){
  // price will eventually get too expensive to buy
    if (price <= cash){
      cash -= price;

      passive_double *= P_double
      income += P;
      time *= speed;
      time = Math.round(time);
      document.getElementById("earnings2").innerHTML = "passive gain per " + String((time/1000) + " seconds: $" + comma(income * passive_double));

      add += A;
      mult *= B;
      exp = C;

      earn = ((mult * add) ** exp);
      document.getElementById("earnings").innerHTML = "money per click: $" + comma(earn);

      // this does not update the given price variable, just the temporary variable.
      // price must be sent back to the code asking for it to update the actual price (ex: price1)
      price = ((price + addition) * multiply ) ** power;
      price = Math.round(price);

      // each button must have slightly different messages
      document.getElementById(ID).innerHTML = msg + "<br>" + comma(price) + " monies";
      button.innerHTML = "monies: " + comma(cash) + "<br>click for $$$";
;
  }// this must be outside if statement. otherwise every time it fails price becomes undefined
  if (speed > 0) { setintervalfix() }
  return price;
};

// yep, idfk what's happening here. maybe i'm dumb but addEventListener doesn't work, UNLESS:
// you make an entirely new function... so i just called the other function... this feels stupid
document.getElementById("upg1").addEventListener("click", function(){
    price1 = buy("upg1", price1,      1,      1.4,       1,      1,      1,      1, "+1 cash per click", 0,     1,      1);
    //       | button | price of |  price | price | price    | add,   mult,  exponent | message for | passive | speed | passive |
});//        | name   | button   |  added | mult  | exponent |    money per click     | button      |  income | mult  | mult    |
  // use for everything :)                                                                         (none in this case)

document.getElementById("upg2").addEventListener("click", function(){
    price2 = buy("upg2", price2, 100, 3.5, 1, 0, 2, 1, "double cash per click", 0, 1, 1);
});

document.getElementById("upg3").addEventListener("click", function(){
    price6 = buy("upg3", price6, 5, 1.4, 1, 5, 1, 1, "+5 cash per click", 0, 1, 1);
});

function workers(){
    cash += (income * passive_double);
    button.innerHTML = "monies: " + comma(cash) + "<br>click for $$$";
}

// moreee w3schools digging for treasure
// yarr! thar be gold on this website!
let income_time = setInterval(workers, time);

function setintervalfix(){
  // THE PLAN: BAND-AID FIX
  // every time speed is upgraded, close setinterval, reopen it.
  // lol...

  clearInterval(income_time);
  income_time = setInterval(workers, time);


}

document.getElementById("passive1").addEventListener("click", function(){
    price3 = buy("passive1", price3, 3, 1.2, 1, 0, 1, 1, "hire workers", 1, 1, 1);
});

document.getElementById("passive_speed").addEventListener("click", function () {
  if (time == 2) {
    document.getElementById("passive_speed").innerHTML = "Upgrade is Maxed out!";
    price4 = Infinity;
  }
  price4 = buy("passive_speed", price4, 0, 1.5, 1, 0, 1, 1, "upgrade worker speed", 0, 0.8, 1);
});

document.getElementById("passive_double").addEventListener("click", function(){
    price7 = buy("passive_double", price7, 3, 2.4, 1, 0, 1, 1, "double worker efficency", 0, 1, 2);
});


// RESET BUTTON
document.getElementById("reset").addEventListener("click", function(){
    if(cash >= price5){
        cash = 0;
        
    }
});