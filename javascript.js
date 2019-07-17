$(document).ready(function(){
    //alert("Hola mundo desde jquery");
    //let varBoton=$('button').html();
    //console.log(varBoton);
    //$('button').html("Cambiado desde jquery");
    //$('.btn').html("Cambiado desde la clase");
    //$('#boton').html("Cambiado desde el id");
    //$('#subcontenedor button').html("boton desde subcontenedor");
    $('button:first').html("primero");
    $('button:last').html("ultimo");
});

//document.querySelector('#boton').innerHTML="Cambiado  desde js";