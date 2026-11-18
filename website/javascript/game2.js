const btn_11 = document.getElementById("11");
const btn_12 = document.getElementById("12");
const btn_13 = document.getElementById("13");
const btn_21 = document.getElementById("21");
const btn_22 = document.getElementById("22");
const btn_23 = document.getElementById("23");
const btn_31 = document.getElementById("31");
const btn_32 = document.getElementById("32");
const btn_33 = document.getElementById("33");

// setup game
let current_turn = "player";

function bot_turn(){
    // for as long as I get an already taken space, regenerate another number, it's only 1 in 9 so it shoudn't be a problem
    let space_taken = true;
    while(space_taken==true){
        //generate new row and collumn to check
        let num1 = Math.round(Math.random());
        let num2 = Math.round(Math.random());
        let num3 = Math.round(Math.random());
        let final = num1+num2+num3;

        num1 = Math.round(Math.random());
        num2 = Math.round(Math.random());
        num3 = Math.round(Math.random());
        let final2 = num1+num2+num3;

        if(final == 0){final += 1}
        if(final2 == 0){final2 += 1}

        console.log(final + "" + final2);
        if(document.getElementById((final + "" + final2)).innerHTML==''){document.getElementById((final + "" + final2)).innerHTML="O"; space_taken=false}
        
    }
};

function turn(ID){
    if(current_turn == "player"){
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

