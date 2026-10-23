// future proof
// just incase new features are added

const button = document.getElementById("clicker")
let cash = 0;
let mult = 1; let add = 1; let exp = 1; // grouped because they are for 1 formula

let price1 = 1; // button prices group
let price2 = 2000;
let price3 = 30;
let price4 = 450;
let price5 = 1000000

let income = 0; let time = 2000; // passive income group



// don't use ^ for exponent, also the 1 + add screws stuff up because it isn't BigInt
let earn = ((mult * add) ** exp);
button.addEventListener("click", function(){
    cash += earn;
    document.getElementById("clicker").innerHTML = "monies: " + String(cash) + "<br>click for $$$";
});

// ex: 1000000 --> 1,000,000
//      input       output
function comma(num){
    let num_comma;
    for(let i = num; i >= 1000; i /= 100){
        // if i > 1000, go 3 spaces right, and add comma? something like that...
    }
}







//use for every upgrade button, so make it flexible... maybe it's gotten too flexible.
function buy(ID, price, addition, multiply, power, A, B, C, msg, P, speed){
    // price will eventually get too expensive to buy
    console.log("called");
     if (price <= cash){
        cash -= price;

        income += P;
        time -= speed;
        document.getElementById("earnings2").innerHTML = "passive gain per " + String((time/1000),);
        <p id="earnings2"> passive gain per 1 seconds: $0</p>

        add += A;
        mult *= B;
        exp = C;

        earn = ((mult * add) ** exp);
        document.getElementById("earnings").innerHTML = "money per click: $" + String(earn);

        // this does not update the given price variable, just the temporary variable.
        // price must be sent back to the code asking for it to update the actual price (ex: price1)
        price = ((price + addition) * multiply ) ** power;
        price = Math.round(price);

        // each button must have slightly different messages
        document.getElementById(ID).innerHTML = msg + "<br>" + String(price) + " monies";
        button.innerHTML = "monies: " + String(cash) + "<br>click for $$$";

        console.log("bought");     
    }// this must be outside if statement. otherwise every time it fails price becomes undefined
    return price;
};

// yep, idfk what's happening here. maybe i'm dumb but addEventListener doesn't work, UNLESS:
// you make an entirely new function... so i just called the other function... this feels stupid
document.getElementById("upg1").addEventListener("click", function(){
    price1 = buy("upg1", price1,      1,      1.4,       1,      1,      1,      1, "+1 cash per click", 0, 0);
    //       | button | price of |  price | price | price    | add,   mult,  exponent | message for | passive |
});//        | name   | button   |  added | mult  | exponent |    money per click     | button      |  income |
  // use for everything :)                                                                         (none in this case)

document.getElementById("upg2").addEventListener("click", function(){
    price2 = buy("upg2", price2, 100, 3.5, 1, 0, 2, 1, "double money per click", 0, 0);
});



function workers(){
    cash += income;
    button.innerHTML = "monies: " + String(cash) + "<br>click for $$$";
}

// moreee w3schools digging for treasure
// yarr! thar be gold on this website!
setInterval(workers, time);

document.getElementById("passive1").addEventListener("click", function(){
    price3 = buy("passive1", price3, 3, 1.2, 1, 0, 1, 1, "hire workers", 1, 0);
});

document.getElementById("passive_speed").addEventListener("click", function(){
    price4 = buy("passive_speed", price4, 0, 1.5, 1, 0, 1, 1, "upgrade worker speed", 0, 100);
});