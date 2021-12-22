

try{
    let inicio = document.querySelectorAll(".cont");
    function mostrarInicio(){
        for(var i=0; i < inicio.length; i++){
            
            
                inicio[i].style.opacity = 1;
                inicio[i].classList.add("mostrarArriba");
           
        }
    }
    
    
    window.addEventListener("load" , mostrarInicio);
}catch{

  
}



let inicio = document.querySelectorAll(".der");

function mostrarDer(){
    for(var i=0; i < inicio.length; i++){
        
        
            inicio[i].style.opacity = 1;
            inicio[i].classList.add("mostrarDerecha");
       
    }
}


let animacion1 = document.querySelectorAll(".mis");
function mostrarScrollder(){
    let scrollTop = document.documentElement.scrollTop;
        for(var i=0; i < animacion1.length; i++){
            let alturaAnimado = animacion1[i].offsetTop;
            if(alturaAnimado - 500 < scrollTop){
                animacion1[i].style.opacity = 1;
                animacion1[i].classList.add("mostrarDerecha");
            }else{
                animacion1[i].style.opacity = 0;
                animacion1[i].classList.remove("mostrarDerecha");
            }
        }
}
function menuResponsive(){
    document.getElementById('desplega').style.opacity = 1;
    document.getElementById('desplega').style.display = 'block';
    document.getElementById('desplega').classList.add("mostrarAbajo");

    document.getElementById('activa').style.display = 'none';
    document.getElementById('desactiva').style.display = 'block';
}
function ocultarmenuResponsive(){
    // document.getElementById('desplega').style.opacity = 0;
    // document.getElementById('desplega').classList.add("mostrarArriba");

    document.getElementById('desplega').style.display = 'none';
    
   
    document.getElementById('activa').style.display = 'block';
    document.getElementById('desactiva').style.display = 'none';
}
// window.addEventListener("load" , mostrarIzq);

// let izquierda = document.querySelectorAll(".izq");

// function mostrarIzq(){
//     for(var i=0; i < izquierda.length; i++){
        
        
//         izquierda[i].style.opacity = 1;
//         izquierda[i].classList.add("mostrarIzquierda");
       
//     }
// }

let animacion = document.querySelectorAll(".izq");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
        for(var i=0; i < animacion.length; i++){
            let alturaAnimado = animacion[i].offsetTop;
            if(alturaAnimado - 500 < scrollTop){
                animacion[i].style.opacity = 1;
                animacion[i].classList.add("mostrarIzquierda");
            }else{
                animacion[i].style.opacity = 0;
                animacion[i].classList.remove("mostrarIzquierda");
            }
        }
}

window.addEventListener("load" , mostrarDer);
window.addEventListener('scroll',mostrarScrollder);
window.addEventListener('scroll',mostrarScroll);
