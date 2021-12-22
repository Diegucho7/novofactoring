window.addEventListener('DOMContentLoaded ', mostrarInicio);

var windowHeight = $(window).height();
var barraAltura = $('.nav-background').innerHeight();
 
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
 
    if(scroll >  windowHeight) {
        $('.nav-background').addClass('fixed');
        $('body').css({'margin-top':barraAltura +'px'});
 
 
    } else {
        $('.nav-background').removeClass('fixed');
        $('body').css({'margin-top': '0px'});
 
 
    }
});

console.log("hola mundo");
var slideIndex = 0;
try{
    showSlides();
}catch{

}


function showSlides() {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,3000);
}


// Inicio de Barra

// let inicioBarra = document.querySelectorAll(".nav-background");
// function mostrarScroll(){
//     let scrollTop = document.documentElement.scrollTop;
     
//             if(200 > scrollTop ){
//                 // inicioBarra.style.opacity = 1;'margin-top':barraAltura +'px'
//                 inicioBarra.classList.add("fixed");
//             }else{
//                 // inicioBarra.style.opacity = 0;
//                 inicioBarra.classList.remove("fixed");
//             }
//         }


// Fin de barra






let animacion = document.querySelectorAll(".animacion");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
        for(var i=0; i < animacion.length; i++){
            let alturaAnimado = animacion[i].offsetTop;
            if(alturaAnimado - 500 < scrollTop){
                animacion[i].style.opacity = 1;
                animacion[i].classList.add("mostrarArriba");
            }else{
                animacion[i].style.opacity = 0;
                animacion[i].classList.remove("mostrarArriba");
            }
        }
}

let inicio = document.querySelectorAll(".cont");

function mostrarInicio(){
    for(var i=0; i < inicio.length; i++){
        
        
            inicio[i].style.opacity = 1;
            inicio[i].classList.add("mostrarArriba");
       
    }
}
// animacion();
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
window.addEventListener("load" , mostrarInicio);
 window.addEventListener('scroll',mostrarScroll);




