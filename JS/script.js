let images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
const boxImage = document.getElementById('boxImage');
let btnLeft = document.getElementById("leftButton")
let btnRight = document.getElementById("rightButton")
let imageCurrent = 0


btnRight.addEventListener ("click", function(){
    
    for (let i = 0; i < images.length; i++) {
        let img = document.createElement("img")
        img.src = images[i]
        boxImage.append(img) 
        img.classList.add ("hidden")
        
        if (i == imageCurrent){
             img.classList.remove("hidden")
        } else if (i != imageCurrent){
             img.classList.add("hidden")

        }

        
    }
    
    imageCurrent++;
    


}); 
