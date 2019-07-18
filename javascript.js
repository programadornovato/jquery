$(document).ready(function(){
    $('#boton').click(function (e) { 
        e.preventDefault();
        $('img').attr('src', 'logo2.png');
    });
    $('#subcontenedor button:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('img').attr('width', '200px');
    });
    $('#subcontenedor button:nth-child(2)').click(function (e) { 
        e.preventDefault();
        let margen= $('img').css('margin-left');
        //alert(margen);
        margen=parseInt( margen.replace('px',''));
        margen=margen+30;
        $('img').css('margin-left', margen+'px');
    });
    $('#subcontenedor button:nth-child(3)').click(function (e) { 
        e.preventDefault();
        $('img').toggleClass('d-none');
    });
    let textoUI=$('#texto');
    textoUI.keyup(function (e) { 
        e.preventDefault();
        $('#saludo').html("Hola "+textoUI.val());
    });
    $('form').submit(function (e) { 
        e.preventDefault();
        
    });
});

