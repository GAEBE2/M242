function setDegree(currentDegree) {
    const min = -10, max = 40;
    var gradient = (currentDegree >= 30) ? "linear-gradient(#F44336 0%, #FFB300 30%, #FFB300 70%, #3F51B5 100%)" :
        "linear-gradient(#FFB300 50%, #3F51B5 100%)";
    const perc = calculatePerc(currentDegree, min, max);
    document.getElementById("thermometer-indicator").style.top = 100 - perc + "%";
    document.getElementById("thermometer-indicator").style.height = perc + "%";
    document.getElementById("thermometer-indicator").style.backgroundImage = getCssValuePrefix(gradient) + gradient;
    document.getElementById("degree-display").innerText = currentDegree + "°C";
}

function calculatePerc(current, min, max) {
    return ((current - min) * 100) / (max - min);
}

function setDecibel(currentDecibel) {
    const min = 0, max = 70;
    const perc = calculatePerc(currentDecibel, min, max);

    document.getElementById("decibel-meter").style.width = perc + "%";
    document.getElementById("decibel-display").innerText = currentDecibel + "dB";
}

function readTextFile() {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", "../data/analyzed_data", false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status === 200 || rawFile.status === 0) {
            var allText = rawFile.responseText.split("\n");
            const currentDegree = parseInt(allText[0]), currentDecibel = parseInt(allText[1]);
            setDegree(currentDegree);
            setDecibel(currentDecibel);
        }
    };
    rawFile.send(null);
}

function getCssValuePrefix(gradient) {
    const prefixes = ["-o-", "-ms-", "-moz-", "-webkit-"],
        dom = document.createElement("div");
    for (var i = 0; i < prefixes.length; i++) {
        // Attempt to set the style
        dom.style.background = prefixes[i] + gradient;
        if (dom.style.background) {
            return prefixes[i];
        }
    }
}