const fechada = "./img/fechada.png"
const aberta = "./img/aberta.png"
const quebrada = "./img/quebrada.png"

document.addEventListener("DOMContentLoaded", function() {
    const $img = document.querySelector("img")

    $img.src = fechada

    $img.addEventListener("mouseover", () => {
        $img.src = aberta
    })

    $img.addEventListener("mouseout", () => {
        $img.src = fechada
    })

    $img.addEventListener("click", () => {
        $img.src = quebrada
    })
})