document.getElementById("Btn").addEventListener("click", myFunction);
    var rollOutcome = math.floor(math.random() * 6) + 1;
    if (rollOutcome == 1) document.write(`<img src="dice1.svg">`);
    else if (rollOutcome == 2) imagContainer.innerHTML = (`<img src="dice2.svg">`);
    else if (rollOutcome == 3) imagContainer.innerHTML = (`<img src="dice3.svg">`);
    else if (rollOutcome == 4) imagContainer.innerHTML = (`<img src="dice4.svg">`);
    else if (rollOutcome == 5) imagContainer.innerHTML = (`<img src="dice5.svg">`);
    else imgContainer.innerHTML = (`<img src="dice6.svg">`);