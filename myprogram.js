var turn1, placement, GameStatus, span, restart;
turn1 = "x";
placement = 0;
GameStatus = false;
span = document.getElementsByTagName("span");
restart = '<button onclick="reset()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg></button>';

function play(y) {
    if (y.dataset.player == "none" && window.GameStatus == false) {
        y.innerHTML = turn1;
        y.dataset.player = turn1;
        placement++;
        if (turn1 == "x") {
            turn1 = "o";
        } else if (turn1 == "o") {
            turn1 = "x";
        }
    }

    /* Win Types */

    winner(1, 2, 3);
    winner(4, 5, 6);
    winner(7, 8, 9);
    winner(1, 4, 7);
    winner(2, 5, 8);
    winner(3, 6, 9);
    winner(1, 5, 9);
    winner(3, 5, 7);

    /* No Winner */

    if (placement == 9 && GameStatus == false) { display(); }

}

function winner(a, b, c) {
    a--;
    b--;
    c--;
    if ((span[a].dataset.player === span[b].dataset.player) && (span[b].dataset.player === span[c].dataset.player) && (span[a].dataset.player === span[c].dataset.player) && (span[a].dataset.player === "x" || span[a].dataset.player === "o") && GameStatus == false) {
        span[a].parentNode.className += " activeBox";
        span[b].parentNode.className += " activeBox";
        span[c].parentNode.className += " activeBox";
        over(a);
    }
}

function reset() {
    document.getElementsByClassName("alert")[0].parentNode.removeChild(document.getElementsByClassName("alert")[0]);
    start();
    window.GameStatus = false;
    for (var k = 0; k < span.length; k++) {
        span[k].parentNode.className = span[k].parentNode.className.replace("activeBox", "");
    }
}

function start() {
    for (i = 0; i < span.length; i++) {
        span[i].dataset.player = "none";
        span[i].innerHTML = "&nbsp;";
    }
    turn1 = "x";
}

function over(a) {
    var gameOverAlertElement = "<b>GAME OVER </b><br><br> Whoo! Player " + span[a].dataset.player.toUpperCase() + ' Wins!!! <br><br>' + restart;
    var div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = gameOverAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    window.GameStatus = true;
    placement = 0;
}

function display() {
    var drawAlertElement = '<b>The game is a draw!!!</b><br><br>' + restart;
    var div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = drawAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    window.GameStatus = true;
    placement = 0;
}