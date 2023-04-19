let boxImage = document.getElementById ("boxImage")
let img = document.createElement("img")
img = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"]
boxImage.append(img)
let btnLeft = document.getElementsByClassName("leftButton")
let btnRight = document.getElementsByClassName("rightButton")
let currentImage = 0

btnRight.addEventListener ("click", function(){

    for (let i = 0; i < img.length; i++) {
        const image = img[i];
        console.log (img[i])
        
    }
}); 







/*for (let i = 0; i < img.length; i++) {
    const image = img[i];
    console.log (img[i])
    
}
*/