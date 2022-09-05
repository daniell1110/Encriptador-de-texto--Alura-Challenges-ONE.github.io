const resultado = document.querySelector("#solucion");
const encriptar_boton = document.querySelector(".encriptar");
const desencriptar_boton = document.querySelector(".desencriptar");
const copiar_text = document.querySelector(".copiar");
const anime = document.querySelector(".anime");
const text1 = document.querySelector(".text1");
const parrafo = document.querySelector(".parrafo");

function copiar(){   // Función que permite copiar el parrafo encriptado o desencriptado.
    let resultado_copiar = resultado.value; 
    navigator.clipboard.writeText(resultado_copiar);
    alert("Excelente, Texto copiado.");
    window.location.reload();
}

function ocultar(){  // Función que permite ocultar la imagen y el texto incial.
    anime.classList.add("ocultar"); 
    text1.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function ocultar_encriptar(){  // Función que permite ocultar la imagen y el texto incial.
    encriptar_boton.classList.add("ocultar"); 
}

function ocultar_copiar(){  // Función que permite ocultar la imagen y el texto incial.
    copiar_text.classList.add("ocultar"); 
}

function ocultar_desencriptar(){  // Función que permite ocultar la imagen y el texto incial.
    desencriptar_boton.classList.add("ocultar"); 
}

function texto_usuario(){ // Función que permite captura el texto del user
    let mensaje_user = document.querySelector("#texto_usuario");
    return mensaje_user.value;
}

function desencriptar_text() {  // Función que permite desencriptar el parrofo ingresado por user.
    let mensaje_encriptado = texto_usuario();
    let mensaje = "";

    for(let i = 0; i < mensaje_encriptado.length; i++) {
        if(mensaje_encriptado[i] == "a"){
            mensaje=mensaje + "a"
            i=i+1;
        }
        else if(mensaje_encriptado[i] == "e"){
            mensaje=mensaje + "e"
            i=i+4;
        }

        else if(mensaje_encriptado[i] == "i"){
            mensaje=mensaje + "i"
            i=i+3;
        }
        else if(mensaje_encriptado[i] == "o"){
            mensaje=mensaje + "o"
            i=i+3;
        }
        else if(mensaje_encriptado[i] == "u"){
            mensaje=mensaje + "u"
            i=i+3;
        }

        else{
            mensaje=mensaje+mensaje_encriptado[i];
        }
        
    }

    return mensaje;
}


function desencriptar(){  //funcion que permite oculatal la imagen, desencriptar el texto y anexarlo al cuadro de resultado
    ocultar();
    ocultar_encriptar();
    ocultar_desencriptar();
    resultado.textContent = desencriptar_text();
}

function encriptar_text(){
    let mensaje_desencriptado = texto_usuario();
    let mensaje = "";

    for(let i = 0; i < mensaje_desencriptado.length; i++) {
        
        if(mensaje_desencriptado[i] >='A' && mensaje_desencriptado[i] <='Z') {

            resultado.value = "\u26A0\uFE0F Lo siento, no se puede incriptar tu texto contiene mayuscula. \uD83D\uDE25 \nSi desea volver a intentarlo, por favor dar clic en el logo.";
            ocultar_copiar();
            ocultar_encriptar();
            ocultar_copiar();
            ocultar_desencriptar();
        }

        else if(mensaje_desencriptado[i] >='á' && mensaje_desencriptado[i] <='ú'){
            resultado.value = "\u26A0\uFE0F Lo siento, no se puede incriptar tu texto contiene tildes (acentos). \uD83D\uDE25 \nSi desea volver a intentarlo, por favor dar clic en el logo.";
            ocultar_copiar();
            ocultar_encriptar();
            ocultar_copiar();
            ocultar_desencriptar();

        }

        else{
        if(mensaje_desencriptado[i] == "a"){
            mensaje=mensaje + "ai"
           
        }
        else if(mensaje_desencriptado[i] == "e"){
            mensaje=mensaje + "enter"
           
        }

        else if(mensaje_desencriptado[i] == "i"){
            mensaje=mensaje + "imes"
            
        }
        else if(mensaje_desencriptado[i] == "o"){
            mensaje=mensaje + "ober"
            
        }
        else if(mensaje_desencriptado[i] == "u"){
            mensaje=mensaje + "ufat"
            
        }

        else{
            mensaje=mensaje+mensaje_desencriptado[i];

        }
        }
    }

    return mensaje;
}

function encriptar(){
    ocultar();
    ocultar_encriptar();
    ocultar_desencriptar();
    resultado.textContent = encriptar_text();
}

function openImg(){
    let image = document.querySelector(".logo");
    let source = image.src;
    window.location.reload(source);
}


encriptar_boton.onclick = encriptar;
desencriptar_boton.onclick=desencriptar;
copiar_text.onclick = copiar;