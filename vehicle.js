window.onload = () => {
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 300);
}

function fillTheForm(carName) {
    url = `http://127.0.0.1:5500/form.html?carName=${encodeURIComponent(carName)}`;
    window.location.href = url;
}