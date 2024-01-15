window.onload = () => {
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 300);
}


document.getElementById("picktypebutton").onclick = function () {
    var cartype = document.getElementById("typepick").value;
}
if (cartype === "SUV"){
    var element = document.getElementById("SUVtype");
    element.style.display = "block";
}else if (cartype === "Sedan") {
    var element = document.getElementById("SEDANtype");
    element.style.display = "block";
}else if (cartype === "Hatchback") {
    var element = document.getElementById("HATCHBACKtype");
    element.style.display = "block";
}else if (cartype === "Sports") {
    var element = document.getElementById("SPORTStype");
    element.style.display = "block";
}else if (cartype === "Luxury") {
    var element = document.getElementById("LUXURYtype");
    element.style.display = "block";
}