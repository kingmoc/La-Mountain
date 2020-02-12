let arrows = document.querySelectorAll(".material-icons")

let backArrow = arrows[0]
let forwardArrow = arrows[1]

let images = document.querySelectorAll('.carousel img')
console.log(images, 'images')

const changeForward = (e) => {
    console.log(e)
    console.log('click works')
}

forwardArrow.addEventListener('click', changeForward)
