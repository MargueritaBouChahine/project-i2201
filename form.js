window.onload = () => {
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 300);
}

function fillTheForm() {
    window.location.href="form.html";
    document.getElementById('carchoice').value = "Toyota Rav-4";
    /*
    var pickedCar = document.getElementsByClassName("car1").value;
    if (pickedCar === "ToyotaRAV-4"){
        document.getElementById('carchoice').value = "Toyota Rav-4";
    } */
}