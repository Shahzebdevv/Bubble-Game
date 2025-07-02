var timer = 60;
var hitrn = 0;
function newHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;

}



function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 126; i++) {
        var num = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#panelbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            document.querySelector("#panelbtm").innerHTML = `<h1>Game Over.</h1><h1>Your Score is ${score}</h1>`;
            clearInterval(timerint);
        }

    }, 1000);

}

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

document.querySelector("#panelbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        newHit();

    }

});


runTimer();
makeBubble();
newHit();

