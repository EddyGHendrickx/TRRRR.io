
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


            clearInterval(trrrr);
            crement = false;
            if (i === o && i === u && o === u) {
                message.innerHTML = "You win";
                target.style.color = "purple";
                target1.style.color = "purple";
                target2.style.color = "purple";

            }
            else if (i === o || i === u || o === u){
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
            }
            else {
                message.innerHTML = "Loser";
            }
            console.log(i,o,u);

            break;
        case false:
            target.style.color = "";
            target1.style.color = "";
            target2.style.color = "";
            trrrr = setInterval(slot, timeout);
            crement = true;
            console.log(i,o,u);

    }


});

