let startTime;
let timeout;
let waiting = false;

function startGame() {

    document.getElementById("result").innerHTML = "";

    let box = document.getElementById("gameBox");
    box.style.backgroundColor = "red";

    waiting = true;

    let randomDelay = Math.random() * 3000 + 2000;

    timeout = setTimeout(() => {
        box.style.backgroundColor = "lime";
        startTime = new Date().getTime();
        waiting = false;
    }, randomDelay);
}

document.getElementById("gameBox").onclick = function () {

    let box = document.getElementById("gameBox");

    if (waiting) {

        clearTimeout(timeout);
        document.getElementById("result").innerHTML =
            "❌ Too early! Wait for green!";
        box.style.backgroundColor = "red";

    }

    else if (box.style.backgroundColor === "lime") {

        let endTime = new Date().getTime();
        let reactionTime = endTime - startTime;

        document.getElementById("result").innerHTML =
            "⏱ Your reaction time: " + reactionTime + " ms";

        box.style.backgroundColor = "red";
    }
};
