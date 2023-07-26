let image = document.getElementById("img-2")

function changeImage() {

    if (image.style.opacity == 0) {
        image.style.opacity = 1
    } 
    else {
        image.style.opacity = 0
    }
}

setInterval(function () {
    changeImage()
}, 4000);