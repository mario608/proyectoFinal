/*
codigo del chatbot 
*/

let btnBolita = document.querySelector( '.chatbot ');

btnBolita.addEventListener('click',aparece);

function aparece (){
let cuadrochatbot = document.querySelector('.cuadrochatbot');
    cuadrochatbot.setAttribute('style','display:block;') ;
}


let btncerra = document.querySelector( '.botoncerrar');

btncerra.addEventListener('click',desaparecer);

function desaparecer(){
    let cuadrochatbot = document.querySelector('.cuadrochatbot');
    cuadrochatbot.setAttribute('style','display:none;') ;

}
//Enter para mandar imprimir 
let escrituraInput = document.querySelector('.mensajes');
escrituraInput.addEventListener('keyup',teclado);

function teclado ( event ){
    if(event.key ==="Enter")
    agregarTexto();
}

//seleccionar el boton enviar
let btnEnviar = document.querySelector('.btnEnviar');
btnEnviar.addEventListener('click',agregarTexto);

function agregarTexto (){
    //USUARIO
    //seleccionar la caja de texto
    let cajaMensajes = document.querySelector('.mensajes');
    //obtenemos el texto de la caja
    let textoPregunta = cajaMensajes.value;
    //borra el texto del input
    cajaMensajes.value = "";
    //seleccionamos el chat 
    let contenedorChat = document.querySelector('.contenedorchat');
    //creamos un elemento parrafo
    let parrafoNuevo = document.createElement('p');
    //Agregamos una clase a "p"
    parrafoNuevo.className = 'mensajeusuario';
    //añadimos el texto al parrafo nuevo
    parrafoNuevo.innerHTML = "Tú : "+ textoPregunta;
    //añadimos el parrafo nuevo al chat
    contenedorChat.appendChild(parrafoNuevo);

    //IA
    let parrafoIA = document.createElement('p');
    parrafoIA.innerHTML = " IA: "+ IA(textoPregunta);
    contenedorChat.appendChild(parrafoIA);
// linea de codigo para que se ponga hacia abajo 
contenedorChat.scrollTop = contenedorChat.scrollHeight;
    

}
function IA( pregunta ){
    //aqui la magia de la IA
    return"LA RESPUESTA";

}
function IA(pregunta){
    //Pregunta 1. Cuantos años tienes?
    let edadpregunta = /(años|tienes|edad)/gi;
    if (edadpregunta.test(pregunta)){
        return "tengo 20 años";
    
    }

    //pregunta 2. Cual es tu nombre?
    let nombrePregunta = /tu [a-z\s]*nombre/gi;

    if(nombrePregunta.test(pregunta)){
        return"Mi nombre es Mario Oropeza";

    }

    //pregunta 3. Cual es tu ocupacion?
    let ocupacionPregunta = /tu [a-z\s]*ocupacion/gi;

    if(ocupacionPregunta.test(pregunta)){
        return"Soy ingeniero en sistemas";

    }

    //Pregunta 4. Cual es tu pasatiempo?
    let pasatiempopregunta = /(libre|tiempo)/gi;
    if (pasatiempopregunta.test(pregunta)){
        return "Me gusta hacer deporte ";
    
    }

     //Pregunta 5. Que lenguaje de progrmacion dominas?
    let lenguajepregunta = /(lenguaje|programacion)/gi;
    if (lenguajepregunta.test(pregunta)){
        return "JavasCript ";
    
    }





    return"no entendí tu pregunta";



}

