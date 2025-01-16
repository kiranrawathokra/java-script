
var investment = 100;
var rate = 0.035;
var text = "";
for (var i=1; i <= investment * 2; i++) {
    text += "total amount in "+i+" years is " + "$" + (investment * ( 1 + (i   * rate))) + "<br>";
}
document.getElementById("demo").innerHTML = text;