window.onload = () => {
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 300);
    
    input = document.getElementById("carChoice");
    let params = new URLSearchParams(window.location.search);
    console.log(params);
    if (params.has("carName")) {
        input.value = decodeURIComponent(params.get("carName"));
        console.log(input.value);
    }
}