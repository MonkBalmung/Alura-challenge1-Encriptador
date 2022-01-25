//================================================FUNCTIONS==========================================<
function validarCaracteres(event){
    event.preventDefault();
    var texto = mensajeInput.value; 
    var textoMinusculas = texto.toLowerCase();
    for (j = 0; j < textoMinusculas.length; j++){
        if( (( textoMinusculas.charCodeAt(j) >= 97 ) && ( textoMinusculas.charCodeAt(j) <= 122 ))){
            encriptarMensaje(textoMinusculas);
                break;
        }else{
            alert("***ERROR DE VALIDACIÓN*** >>> El mensaje tiene algún caracter especial. ¿Eres alienigena o algo así? Intenta con lenguaje del alfabeto terrícola.");
            break;
        }
    } 
    
}

function encriptarMensaje(texto){
    var textoMinusculas = texto.toLowerCase();
    var textoProcesado = [];
    var mensajeEncriptado = "";
    var llaveA = "ai"; 
    var llaveE = "enter"; 
    var llaveI = "imes"; 
    var llaveO = "ober"; 
    var llaveU = "ufat"; 
    
    for(var i = 0; i < textoMinusculas.length; i++){
        if  ((textoMinusculas[i] === "a") || (textoMinusculas[i] === "á")) {
            textoProcesado.push(llaveA);
        }
        else if ((textoMinusculas[i] === "e") || (textoMinusculas[i] === "é")) {
            textoProcesado.push(llaveE);
        }
        else if ((textoMinusculas[i] === "i") || (textoMinusculas[i] === "í")){
            textoProcesado.push(llaveI);
        }
        else if ((textoMinusculas[i] === "o") || (textoMinusculas[i] === "ó")){
            textoProcesado.push(llaveO);
        }
        else if ((textoMinusculas[i] === "u") || (textoMinusculas[i] === "ú")){
            textoProcesado.push(llaveU);
        }
        else {
            textoProcesado.push(textoMinusculas[i]);
        }
    }
    
    mensajeEncriptado = textoProcesado.join('');  
    console.log(mensajeEncriptado); 
    var mensajeOutput = document.querySelector("#texto-output");   
    document.getElementById("texto-output").value = mensajeEncriptado;    
    mensajeOutput.value = mensajeEncriptado;
    mensajeInput.value = "";

        return mensajeEncriptado;        
}    
function desencriptarMensaje(event){
    event.preventDefault();
    var mensajeEncriptado = mensajeInput.value;
    var textoProcesado = [];
    var mensajeDesencriptado = "";
    var patronA = /ai/g; 
    var patronE = /enter/g; 
    var patronI = /imes/g; 
    var patronO = /ober/g; 
    var patronU = /ufat/g; 

    var mensajeDesencriptado = mensajeEncriptado.replace(patronA, "a").replace(patronE, "e").replace(patronI, "i").replace(patronO, "o").replace(patronU, "u");
    console.log(mensajeDesencriptado);

    var mensajeOutput = document.querySelector("#texto-output");   
    document.getElementById("texto-output").value = mensajeDesencriptado;    
    mensajeOutput.value = mensajeDesencriptado;
}
function copiarClipboard(){
    var content = document.getElementById('texto-output');    
    content.select();
    document.execCommand('copy');
    alert("Copied!");
}
//==========================================================================================<
//-----------------------------------------MAIN--------------------------------------------->
    var mensajeInput = document.querySelector("#texto-input");  
    var mensajeOutput = document.querySelector("#texto-output");  

    var button_encriptar = document.querySelector("#button-encriptar");
    button_encriptar.addEventListener("click", validarCaracteres);    
    
    var button_desencriptar = document.querySelector("#button-desencriptar");
    button_desencriptar.addEventListener("click", desencriptarMensaje); 

    var button_copiar = document.querySelector("#button-copiar");
    button_copiar.addEventListener("click", copiarClipboard); 
//-----------------------------------------END-----------------------------------------------|
