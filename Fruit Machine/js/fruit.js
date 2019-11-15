let input = document.getElementById("input");
let submit = document.getElementById("start");
let result = document.getElementById("result");

let balance = 500;
let bet = 0;
let wins = 0;
let payout = 0;
let totalPayout = 0;
let final = [];

submit.addEventListener("click", spin);

function spin() {
    bet = input.value;
    if (bet > balance) {
        alert("You do not have enough balance. Press Reset");
    }
    else if ((bet > 100) || (bet == "")) {
        alert("Please enter a number between 1 and 100");
    } else if (bet <= balance) {
        balance = balance - bet;
        final.push(spinReel("r1"));
        final.push(spinReel("r2"));
        final.push(spinReel("r3"));
        //Check if the reels match up by checking 1 and 0 & 0 and 2
        if (final[0] == final[1] && final[0] == final[2]) {
            winner();
        }
        else {
            loser();
        }
        updateTheScreen();
        final = [];
    }
};

function spinReel(reel) {
    let i = Math.floor(Math.random() * 7)
    if (i == 0) {
        document.getElementById(reel).src = "images/OneBar.png"
    };
    if (i == 1) {
        document.getElementById(reel).src = "images/Grapes.png"
    };
    if (i == 2) {
        document.getElementById(reel).src = "images/Lemon.png"
    };
    if (i == 3) {
        document.getElementById(reel).src = "images/Orange.png"
    };
    if (i == 4) {
        document.getElementById(reel).src = "images/Strawberry.png"
    };
    if (i == 5) {
        document.getElementById(reel).src = "images/Watermelon.png"
    };
    if (i == 6) {
        document.getElementById(reel).src = "images/ThreeBars.png"
    };
    return i;
};

function loser() {
    result = document.getElementById("result").src = "images/Fail.png"
};

function winner() {
    result = document.getElementById("result").src = "images/BigWin.png"
    // OneBar = pay out 1x bet amount and add to balance
    if (final[0] == 0) {
        payout = (bet * 1);
        balance += payout;
    }
    // Grape = pay out 2x bet amount and add to balance
    if (final[0] == 1) {
        payout = (bet * 2);
        balance += payout;
    }
    // Lemon = pay out 3x bet amount and add to balance
    if (final[0] == 2) {
        payout = (bet * 3);
        balance += payout;
    }
    // Orange = pay out 4x bet amount and add to balance
    if (final[0] == 3) {
        payout = (bet * 6);
        balance += payout;
    }
    // Strawberry = pay out 5x bet amount and add to balance
    if (final[0] == 4) {
        payout = (bet * 5);
        balance += payout;
    }
    // Watermelon = pay out 4x bet amount and add to balance
    if (final[0] == 5) {
        payout = (bet * 4);
        balance += payout;
    }
    // ThreeBars = pay out 10x bet amount and add to balance
    if (final[0] == 6) {
        payout = (bet * 10);
        balance += payout;
    }
    // Adds 1 to the win count and updates the winsDisplay to this new total
    wins ++;
    document.getElementById("winsDisplay").innerHTML = wins;
    //Adds the payout amount to the totalPayout and updates the payoutDisplay to this new total
    totalPayout += payout;
    document.getElementById("payoutDisplay").innerHTML = totalPayout;
};

// This will update the balance when a bet is made whether it is a win or a loss.
function updateTheScreen() {
    document.getElementById("balanceDisplay").innerHTML = balance;
};


//reset function when pressed to reset balance, wins and payouts to 0 and delete the input bet value.
document.getElementById("reset").addEventListener("click", reset);
function reset() {
    balance = 500;
    document.getElementById("balanceDisplay").innerHTML = 500;
    document.getElementById("winsDisplay").innerHTML = 0;
    document.getElementById("payoutDisplay").innerHTML = 0;
    input.value = "";
}

