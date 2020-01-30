//created dice variable and a random number generator between 1-6 for each chance of the dice landing

let dice = {
    chance: 6,
    activate: function() {
        var unknownNumber = Math.floor(Math.random() * this.chance) + 1;
        return unknownNumber;
    }
}

function getNumber(output) {
    var box = document.getElementById('box');
    box.innerHTML = output;
    landedOn.innerHTML = "you rolled: " + output;
}

Btn.onclick = function() {
    var result = dice.activate();
    getNumber(result)
}

// function getNumber(output) {
//     var landedOn = document.getElementById('landedOn');
//     .innerHTML = output;
// } WAS TRYING TO ALSO MAKE "LANDEDON" VAR DISPLAY OUTPUT