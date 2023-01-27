const controlls = document.querySelectorAll('.control')
const selectAllImages = document.querySelectorAll('.item')
const pagination = document.querySelector('.pagination h4')

let currentItem = 0
let quantityImages = selectAllImages.length

controlls.forEach((element) => {

    element.addEventListener('click', () => {

        const isLeft = element.classList.contains('arrow-left')

        if (isLeft) {

            if (currentItem <= 0) {
                currentItem = 7
            } else {
                currentItem -= 1
            }

        }

        else {

            if (currentItem === quantityImages - 1) {
                currentItem = 0
            } else {
                currentItem += 1
            }

        }

        selectAllImages.forEach((element) => {
            element.classList.remove('current-item')
        })

        selectAllImages[currentItem].scrollIntoView({
            inline: "center", // responsável por deixar uma imagem com um foco centralizado
            behavior: "smooth" // responśavel por sauavizar a passagem de imagens
        })

        selectAllImages[currentItem].classList.add('current-item')

        pagination.textContent = `${currentItem + 1} / ${quantityImages}`
    })
})

