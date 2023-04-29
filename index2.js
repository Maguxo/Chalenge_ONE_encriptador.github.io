
function encriptar(){
    let  codifica = document.getElementById("area1").value;
    let anuncio = document.getElementById("titulo-mensaje");
    let bloque = document.getElementById("parrafo");
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
                        bloque.textContent= "";
                        vistiBueno.src = "./imagenes/ok2.gif"
                     }else{
                        vistiBueno.src = "./imagenes/what.gif";
                        bloque.textContent= "";
                        anuncio.textContent = "No se encriptó ningun texto";
                        alert("Debes ingresar algun texto");
                     }
                     
}

function desencriptar(){

    let codifica = document.getElementById("area1").value;
    let anuncio = document.getElementById("titulo-mensaje");
    let bloque = document.getElementById("parrafo");
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
                                bloque.textContent= "";
                                vistiBueno.src = "./imagenes/ok.gif"
                            }else{
                                vistiBueno.src = "./imagenes/what.gif";
                                bloque.textContent= "";
                                anuncio.textContent = "No se desencriptó ningun texto";
                                alert("Debes ingresar algun texto");

                            }

}