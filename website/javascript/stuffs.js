let cash = 0;
const button = document.getElementById("clicker")

// future proof
// just incase new features are added
// big int is just incase it gets into the billions
let mult = 1; let add = 1; let exp = 1;
let price1 = 1;
let price2 = 500;

// don't use ^ for exponent, also the 1 + add screws stuff up because it isn't BigInt
let earn = ((mult * add) ** exp);
button.addEventListener("click", function(){
    cash += earn;
    document.getElementById("clicker").innerHTML = "monies: " + String(cash);
});

//use for every upgrade button, so make it flexible
function buy(ID, price, addition, multiply, power, A, B, C, msg){
    // price will eventually get too expensive to buy
    console.log("called");
     if (price <= cash){

        cash -= price;

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
        document.getElementById(ID).innerHTML = msg + String(price) + " monies";
        button.innerHTML = "monies: " + String(cash);

        console.log("bought");     
    }// this must be outside if statement. otherwise every time it fails price becomes undefined
    return price;
};

// yep, idfk what's happening here. maybe i'm dumb but addEventListener doesn't work, UNLESS:
// you make an entirely new function... so i just called the other function... this feels stupid
document.getElementById("upg").addEventListener("click", function(){
    price1 = buy("upg", price1,      1,      1.1,       1,      1,      1,      1, "+1 cash per click for ");
    //       | button | price of |  price | price | price    | add,   mult,  exponent |
});//        | name   | button   |  added | mult  | exponent |    money per click     |
  // use for everything :)

document.getElementById("upg2").addEventListener("click", function(){
    price2 = buy("upg2", price2, 0, 3, 1, 0, 2, 1, "double money per click for ");
});