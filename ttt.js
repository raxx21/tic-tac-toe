var restart = document.querySelector("#btn");
var action = document.querySelectorAll('.cell');
var turn = document.getElementById("winner")


clearAll();
var count = 1;

function singleclick(square) {
    for (var i = 0; i < action.length; i++) {

        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (count % 2 === 0) {
                this.innerHTML = "X";
                turn.innerHTML = "O Turn Now";
                checkWinner();
                count += 1;

            } else {
                this.innerHTML = "O";
                turn.innerHTML = "X Turn Now";
                checkWinner();
                count += 1;
            }
        }
    }
    console.log(square.target.id)

}

function clearAll() {
    for (var i = 0; i < action.length; i++) {
        action[i].addEventListener("click", singleclick);
        action[i].textContent = '';
        win.innerHTML = ""

    }
}

restart.addEventListener("click", clearAll)

function winner(b1, b2, b3) {
    var win = document.getElementById("win");
    if (b1.innerHTML === "X") {
        turn.innerHTML = ""
        win.innerHTML = "Player two is Winner"
    } else {
        turn.innerHTML = ""
        win.innerHTML = "Player one is Winner"
    }

}

function checkWinner() {
    var B1 = document.getElementById('0');
    var B2 = document.getElementById('1');
    var B3 = document.getElementById('2');
    var B4 = document.getElementById('3');
    var B5 = document.getElementById('4');
    var B6 = document.getElementById('5');
    var B7 = document.getElementById('6');
    var B8 = document.getElementById('7');
    var B9 = document.getElementById('8');

    if (B1.innerHTML !== "" && B1.innerHTML === B2.innerHTML && B1.innerHTML === B3.innerHTML) {
        console.log("w1")
        winner(B1, B2, B3);
    }

    if (B4.innerHTML !== "" && B4.innerHTML === B5.innerHTML && B4.innerHTML === B6.innerHTML) {
        console.log("w2")
        winner(B4, B5, B6);
    }

    if (B7.innerHTML !== "" && B7.innerHTML === B8.innerHTML && B7.innerHTML === B9.innerHTML) {
        console.log("w3")
        winner(B7, B8, B9);

    }

    if (B1.innerHTML !== "" && B1.innerHTML === B4.innerHTML && B1.innerHTML === B7.innerHTML) {
        console.log("w4")
        winner(B1, B4, B7);
    }

    if (B2.innerHTML !== "" && B2.innerHTML === B5.innerHTML && B2.innerHTML === B8.innerHTML) {
        console.log("w5")
        winner(B2, B5, B8);
    }

    if (B3.innerHTML !== "" && B3.innerHTML === B6.innerHTML && B3.innerHTML === B9.innerHTML) {
        console.log("w6")
        winner(B3, B6, B9);
    }

    if (B1.innerHTML !== "" && B1.innerHTML === B5.innerHTML && B1.innerHTML === B9.innerHTML) {
        console.log("w7")
        winner(B1, B5, B9);
    }

    if (B3.innerHTML !== "" && B3.innerHTML === B5.innerHTML && B3.innerHTML === B7.innerHTML) {
        console.log("w8")
        winner(B3, B5, B7);
    }
}