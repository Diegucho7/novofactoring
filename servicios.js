// Prueba
/* Elemento DIV que cambia su texto */
var a = document.getElementById('servicio-parrafo');
var n = document.getElementById('noaceptacion');
var s = document.getElementById('supp');
/* Se agrega el evento al elemento */
a.addEventListener("click", changeText);

/* Función que se gatilla al hacer click en el elemento DIV */
function changeText() {
    var b = document.getElementById('acept');


    // b.style.opacity = 1;
    // b.classList.add("mostrarAbajo");
    
    if(b.style.display='none'){
        b.style.opacity = 1;
        b.style.display='block';
        b.classList.add("mostrarAbajo");

    }else if(b.style.display='block'){
        // b.style.opacity = 0;
        b.style.display='none';
        b.classList.remove("mostrarAbajo");
    }
    // if (a.innerHTML == "Factoring con aceptación") {
    //     a.innerHTML = "Mundo";
    // } else if (a.innerHTML == "Mundo") {
    //     a.innerHTML = "Hola"; 
    // }
}
// window.addEventListener('click',changeText);

function noacepta(){
    var t = document.getElementById('noacept');
    if(t.style.display='none'){
        t.style.opacity = 1;
        t.style.display='block';
        t.classList.add("mostrarAbajo");

    }else{
        
        t.style.opacity = 0;
        // t.style.display='none';
        t.classList.remove("mostrarAbajo");
    }
}


function sup(){
    var t = document.getElementById('supply');
    if(t.style.display='none'){
        t.style.opacity = 1;
        t.style.display='block';
        t.classList.add("mostrarAbajo");

    }
}



// Nuevas funciones

function mostrarAcepta(){
    document.getElementById('acept').style.opacity = 1;
    document.getElementById('acept').style.display = 'block';
    document.getElementById('acept').classList.add("mostrarAbajo");
    document.getElementById('iconoMas').style.display = 'none';
    document.getElementById('iconomenos').style.display = 'block';
}

function ocultarAcepta(){
    document.getElementById('acept').style.display = 'none';
    document.getElementById('iconoMas').style.display = 'block';
    document.getElementById('iconomenos').style.display = 'none';
}


function mostrarNoAcepta(){
    document.getElementById('noacept').style.opacity = 1;
    document.getElementById('noacept').style.display = 'block';
    document.getElementById('noacept').classList.add("mostrarAbajo");

    document.getElementById('iconoMas-1').style.display = 'none';
    document.getElementById('iconomenos-1').style.display = 'block';
}

function ocultarNoAcepta(){
    document.getElementById('noacept').style.display = 'none';
    document.getElementById('iconoMas-1').style.display = 'block';
    document.getElementById('iconomenos-1').style.display = 'none';
}

function mostrarSupply(){
    document.getElementById('supply').style.opacity = 1;
    document.getElementById('supply').style.display = 'block';
    document.getElementById('supply').classList.add("mostrarAbajo");


    document.getElementById('iconoMas-2').style.display = 'none';
    document.getElementById('iconomenos-2').style.display = 'block';
}

function ocultarSupply(){
    document.getElementById('supply').style.display = 'none';
    document.getElementById('iconoMas-2').style.display = 'block';
    document.getElementById('iconomenos-2').style.display = 'none';
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