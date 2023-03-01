function numberOneTriangle() {
    let n = parseInt(document.getElementById("n").value);
    let tamgiac = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            tamgiac += "*";
        }
        tamgiac += "<br>";
    }
    document.getElementById("tamgiac").innerHTML = tamgiac;
}