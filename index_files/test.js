function dontclick() {
    document.getElementById("dontclickelement").tagName = "h1";
    document.getElementById("dontclickelement").innerHTML = "<iframe><body><h1>you just got iframe'd !!!!</h1></body></iframe>";
}