const btn_11 = document.getElementById("1A");
const btn_12 = document.getElementById("1B");
const btn_13 = document.getElementById("1C");
const btn_21 = document.getElementById("2A");
const btn_22 = document.getElementById("2B");
const btn_23 = document.getElementById("2C");
const btn_31 = document.getElementById("3A");
const btn_32 = document.getElementById("3B");
const btn_33 = document.getElementById("3C");

// setup game
let current_turn = "player";

function bot_turn(){
    // for as long as I get an already taken space, regenerate another number, it's only 1 in 9 so it shoudn't be a problem
    let space_taken = true;
    while(space_taken = true){
        let num = Math.random();
        num * 10;
        num = Math.trunc(num);
        let num1 = num % 3;

        // do it again, get random row and collumn number
        num = Math.random();
        num * 10;
        num = Math.trunc(num);
        let num2 = num % 3;

        if(("btn_" + num1 + num2).innerHTML==''){
            ("btn_" + num1 + num2).innerHTML="X";
            space_taken=false;
        }
    }
    
};

function turn(ID){
    if(current_turn == "player"){
        console.log("called");
        if(ID.innerHTML==''){
            ID.innerHTML="X";
        }
    bot_turn()
    }
}

// the lazy and efficient way
// edit, forgot that javascript doesn't like immediately sending something to a function
// so I have to make a new temp function to start the actual one
btn_11.addEventListener("click", function(){turn(btn_11)});
btn_12.addEventListener("click", function(){turn(btn_12)});
btn_13.addEventListener("click", function(){turn(btn_13)});
btn_21.addEventListener("click", function(){turn(btn_21)});
btn_22.addEventListener("click", function(){turn(btn_22)});
btn_23.addEventListener("click", function(){turn(btn_23)});
btn_31.addEventListener("click", function(){turn(btn_31)});
btn_32.addEventListener("click", function(){turn(btn_32)});
btn_33.addEventListener("click", function(){turn(btn_33)});

