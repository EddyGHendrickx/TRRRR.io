let coins = document.getElementById("coins");
let inputVal = document.getElementById("inputVal");

let target = document.getElementById("target");
let target1 = document.getElementById("target1");
let target2 = document.getElementById("target2");
let message = document.getElementById("message");
let button = document.getElementById("stop");

let i = 0;
let o = 0;
let u = 0;

function slot(){
    i = Math.floor(Math.random()*10);
    o = Math.floor(Math.random()*10);
    u = Math.floor(Math.random()*10);

    target.innerHTML = i;
    target1.innerHTML = o;
    target2.innerHTML = u;

}
function Moneys(amount) {

    this.amount = amount;


    this.bet = function() {
        if (inputVal.length === 0) {
            message.innerHTML = "Please enter an amount you want to bet.";
        }
        else if (Number.isInteger(+inputVal) === false) {
            message.innerHTML = "Please enter a whole number";
        }
        else if (this.amount === 0) {
            message.innerHTML = "You ran out of coins";
        }
        else if (this.amount - inputVal < 0) {
            message.innerHTML = "You dont have enough credits.";
        }
        else {
            if (i === o && i === u && o === u) {
                message.style.fontSize = "100px";

                message.innerHTML = "You win";
                target.style.color = "purple";
                target1.style.color = "purple";
                target2.style.color = "purple";
                moneys1.winBigTime();
                coins.innerHTML = "";
                coins.innerHTML = moneys1.amount;
                alert("You are a big boy.")

            }
            else if (i === o || i === u || o === u){
                message.style.fontSize = "50px";

                message.innerHTML = "You win. Kinda...";
                if (i===o){
                    target.style.color = "green";
                    target1.style.color = "green";
                }
                else if(i === u){
                    target.style.color = "green";
                    target2.style.color = "green";
                }
                else if(o === u){

                    target2.style.color = "green";
                    target1.style.color = "green";
                }
                moneys1.winKinda();
                coins.innerHTML = "";
                coins.innerHTML = moneys1.amount;
            }
            else {

                message.innerHTML = "Loser";

            }
            this.amount = this.amount - inputVal;
            return this.amount;
        }

    };
    this.winKinda = function () {
        this.amount = inputVal*3 + this.amount;
        return this.amount;
    };

    this.winBigTime = function () {
        this.amount = inputVal*50 + this.amount;
        return this.amount;
    };

}


function checkInput() {
    inputVal = document.getElementById("inputVal").value;
    console.log(Number.isInteger(+inputVal));

}

setInterval(checkInput, 100);

const moneys1 = new Moneys(100);



coins.innerHTML = "";
coins.innerHTML = moneys1.amount;








let timeout = 20;
let crement = true;
let trrrr = setInterval(slot, timeout);

button.addEventListener("click", function () {
    switch (crement) {
        case true:

            coins.innerHTML = "";

            moneys1.bet();
            coins.innerHTML = moneys1.amount;
            clearInterval(trrrr);
            crement = false;


            break;
        case false:

            if (moneys1.amount === 0) {
                message.innerHTML = "You don't have enough credits.";
            }
            else {
                message.innerHTML = "";
                message.style.fontSize = "";
                target.style.color = "";
                target1.style.color = "";
                target2.style.color = "";
                trrrr = setInterval(slot, timeout);
                crement = true;
            }
    }


});
