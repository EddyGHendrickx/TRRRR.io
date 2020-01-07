let coins = document.getElementById("coins");


function Moneys(amount, betAmount) {

    this.amount = amount;
    this.betAmount = betAmount;


    this.bet = function() {
        
        this.amount = this.amount - this.betAmount;
        return this.amount
    };
    this.winKinda = function () {
        this.amount = this.betAmount*3 + this.amount;
        return amount;
    };

    this.winBigTime = function () {
           this.amount = this.betAmount*10 + this.amount;
           return amount;
    };

}


const moneys1 = new Moneys(10, 1);



coins.innerHTML = "";
coins.innerHTML = moneys1.amount;




let target = document.getElementById("target");
let target1 = document.getElementById("target1");
let target2 = document.getElementById("target2");
let message = document.getElementById("message");

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

let timeout = 20;
let crement = true;
let trrrr = setInterval(slot, timeout);

let button = document.getElementById("stop");
button.addEventListener("click", function () {
    switch (crement) {
        case true:

            moneys1.bet();
            coins.innerHTML = "";
            coins.innerHTML = moneys1.amount;
            clearInterval(trrrr);
            crement = false;
            if (i === o && i === u && o === u) {
                message.style.fontSize = "100px";

                message.innerHTML = "You win";
                target.style.color = "purple";
                target1.style.color = "purple";
                target2.style.color = "purple";
                moneys1.winBigTime();
                coins.innerHTML = "";
                coins.innerHTML = moneys1.amount;

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

            break;
        case false:
            message.innerHTML = "";
            message.style.fontSize = "";
            target.style.color = "";
            target1.style.color = "";
            target2.style.color = "";
            trrrr = setInterval(slot, timeout);
            crement = true;

    }


});

