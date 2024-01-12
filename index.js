var circle = document.getElementById("circle");
var uparrow = document.getElementById("uparrow");
var downarrow = document.getElementById("downarrow");

var rotateValue = circle.style.transform;
var rotateSum;

uparrow.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downarrow.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}