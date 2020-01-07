
let target = document.getElementById("target");
let target1 = document.getElementById("target1");
let target2 = document.getElementById("target2");

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

let timeout = 10;
let crement = true;
let trrrr = setInterval(slot, timeout);

let button = document.getElementById("stop");
button.addEventListener("click", function () {
    switch (crement) {
        case true:
            clearInterval(trrrr);
            crement = false;
            if (i === o && i === u && o === u) {
                alert("You win");
            }
            else if (i === o || i === u || o === u){
                alert("You win. Kinda..");
            }
            else {
                alert("Loser");
            }
            console.log(i,o,u);

            break;
        case false:
            trrrr = setInterval(slot, timeout);
            crement = true;
            console.log(i,o,u);

    }


});

