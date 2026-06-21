function agregarCorazon(){
    const corazon = document.createElement("div");

    corazon.innerHTML = "❤️";
    corazon.classList.add("corazon");

    const margen = 100;

    corazon.style.left =
        Math.random() * (window.innerWidth - margen) + "px";

    corazon.style.top =
        Math.random() * (window.innerHeight - margen) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 3000);
}
