document.addEventListener("DOMContentLoaded", function(){
    console.log("coucou")
    let bouton = document.querySelector("#toggle");
    console.log(bouton)
    let img = document.querySelector("img");
    let body = document.querySelector("body");
    bouton.addEventListener("click", function(){

        if(bouton.innerHTML === "Allumer la Lumière"){         
            img.src ="assets/img/on.png";
            body.style.backgroundColor = "#edd37c";
            bouton.innerHTML = "Eteindre la Lumière";
        }else{
            img.src = "assets/img/off.png";
            body.style.backgroundColor = "darkslategrey";
            bouton.innerHTML = "Allumer la Lumière";
        }

        
    })
})