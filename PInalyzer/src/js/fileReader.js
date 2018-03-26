function readTextFile() {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", "../data/analyzed_data", false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status === 200 || rawFile.status === 0) {
            var allText = rawFile.responseText.split("\n");
            const current = parseInt(allText[0]), min = -10, max = 40;
            var gradient;
            gradient = (current >= 30) ? "linear-gradient(#F44336 0%, #FFB300 30%, #FFB300 70%, #3F51B5 100%)" :
                "linear-gradient(#FFB300 50%, #3F51B5 100%)";
            const perc = ((current - min) * 100) / (max - min);
            document.getElementById("thermometer-indicator").style.top = 100 - perc + "%";
            document.getElementById("thermometer-indicator").style.height = perc + "%";
            document.getElementById("thermometer-indicator").style.backgroundImage = getCssValuePrefix(gradient) + gradient;
            document.getElementById("degree-display").innerText = current + "°C";
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