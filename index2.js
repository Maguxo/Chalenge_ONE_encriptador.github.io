
function encriptar(){
    let  codifica = document.getElementById("area1").value;
    let anuncio = document.getElementById("titulo-mensaje");
    let bloque = document.getElementById("mensajeC");
    let vistiBueno = document.getElementById("ima-inicio");

    let respuesta = codifica
                     .replace(/e/gi,"enter")
                     .replace(/i/gi,"imes")
                     .replace(/a/gi,"ai")
                     .replace(/o/gi,"ober")
                     .replace(/u/gi,"ufat");

                     if(codifica.length !=0){
                        document.getElementById("area1").value = respuesta;
                        anuncio.textContent = "Texto encriptado con exito";
                        bloque.textContent= respuesta;
                        vistiBueno.src = "./imagenes/ok2.gif"
                     }else{
                        vistiBueno.src = "./imagenes/what.gif";
                        bloque.textContent= " ";
                        anuncio.textContent = "No se encriptó ningun texto";
                        swal("¡OJO!","Debes ingresar un texto","warning");
                     }
                     
}

function desencriptar(){

    let codifica = document.getElementById("area1").value;
    let anuncio = document.getElementById("titulo-mensaje");
    let bloque = document.getElementById("mensajeC");
    let vistiBueno = document.getElementById("ima-inicio");
    
    
    let respuesta = codifica 
                            .replace(/enter/gi,"e")
                            .replace(/imes/gi,"i")
                            .replace(/ai/gi,"a")
                            .replace(/ober/gi,"o")
                            .replace(/ufat/gi,"u");

                            if(codifica.length != 0){
                                document.getElementById("area1").value = respuesta;
                                anuncio.textContent = "Texto desencriptado con exito";
                                bloque.textContent= respuesta;                               
                                vistiBueno.src = "./imagenes/ok.gif"
                            }else{
                                vistiBueno.src = "./imagenes/desencriptar.gif";
                                bloque.textContent= " ";
                                anuncio.textContent = "No se desencriptó ningun texto";
                                swal("¡OJO!","Debes ingresar un texto","warning");
                            }
}

function lea(){
     
    let texto = document.querySelector('#mensajeC').value;
    return texto;
}

async function co(){
    
    let txt = lea();
    await navigator.clipboard.writeText(txt);
}

function copia(){

    co();
}