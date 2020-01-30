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
}

var Btn = document.getElementById('Btn');

Btn.onclick = function() {
    var result = dice.activate();
    getNumber(result)
}