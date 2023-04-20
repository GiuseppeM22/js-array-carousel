let images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
const boxImage = document.getElementById('boxImage');
let btnLeft = document.getElementById("leftButton")
let btnRight = document.getElementById("rightButton")
let imageCurrent = 0


    
    for (let i = 0; i < images.length; i++) {
        let img = document.createElement("img")
        img.src = images[i]
        boxImage.append(img) 
        img.classList.add ("hidden")
        
        if (i == imageCurrent){
             img.classList.remove("hidden")
        }

        
        }

 let imagesEle = document.querySelectorAll("#boxImage img")

  btnRight.addEventListener ("click", function(){

        if (imageCurrent < 4){   
            for (let i = 0; i < imagesEle.length; i++)
                if (i == imageCurrent+1 )
                    imagesEle[i].classList.remove("hidden")
                    else{
                    imagesEle[i].classList.add("hidden")

                    }
            imageCurrent++
        }

            
                        
        }); 

        btnLeft.addEventListener ("click", function(){

            if (imageCurrent > 0){   
                for (let i = 0; i < imagesEle.length; i++)
                    if (i == imageCurrent-1 )
                        imagesEle[i].classList.remove("hidden")
                        else{
                        imagesEle[i].classList.add("hidden")
    
                        }
                imageCurrent--
            }
    
                
                            
            }); 

    

 
