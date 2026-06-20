function agregarCorazon(){
    const corazon = document.createElement("div");

    corazon.innerHTML="❤️";
    corazon.classList.add("corazon");

    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 3000);
}
