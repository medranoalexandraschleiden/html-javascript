<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reaction Speed Test</title>

<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #222;
        color: white;
    }

    h1 {
        margin-top: 50px;
    }

    #gameBox {
        width: 200px;
        height: 200px;
        margin: 50px auto;
        background-color: red;
        border-radius: 15px;
        cursor: pointer;
        transition: background 0.2s;
    }

    #result {
        font-size: 20px;
        margin-top: 20px;
    }

    button {
        padding: 10px 20px;
        font-size: 18px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        background-color: #00c6ff;
        color: white;
    }
</style>
</head>

<body>

<h1>⚡ Reaction Speed Test</h1>
<p>Wait for the box to turn GREEN, then click as fast as you can!</p>

<div id="gameBox"></div>

<button onclick="startGame()">Start Game</button>

<div id="result"></div>

<script>
let startTime;
let timeout;
let waiting = false;

function startGame() {
    document.getElementById("result").innerHTML = "";
    let box = document.getElementById("gameBox");
    box.style.backgroundColor = "red";
    waiting = true;

    let randomDelay = Math.random() * 3000 + 2000; // 2-5 seconds

    timeout = setTimeout(() => {
        box.style.backgroundColor = "lime";
        startTime = new Date().getTime();
        waiting = false;
    }, randomDelay);
}

document.getElementById("gameBox").onclick = function() {
    let box = document.getElementById("gameBox");

    if (waiting) {
        clearTimeout(timeout);
        document.getElementById("result").innerHTML = "❌ Too early! Wait for green!";
        box.style.backgroundColor = "red";
    }

    else if (box.style.backgroundColor === "lime") {
        let endTime = new Date().getTime();
        let reactionTime = endTime - startTime;
        document.getElementById("result").innerHTML = 
            "⏱ Your reaction time: " + reactionTime + " ms";
        box.style.backgroundColor = "red";
    }
}
</script>

</body>
</html>
