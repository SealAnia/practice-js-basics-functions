function runTimer() {
    const czas = (new Date()).toLocaleTimeString();
    console.log(czas);
}

setInterval(runTimer());

setInterval(function() {
    runTimer();
}, 5000)