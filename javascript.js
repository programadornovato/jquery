$(document).ready(function(){
    $('#boton').addClass('btn-danger');
    $('#boton').removeClass('btn-primary');

    $('#subcontenedor').append('<button type="button" class="btn btn-danger">agregado con append</button>');
    $('#subcontenedor').prepend('<button type="button" class="btn btn-danger">agregado con prepend</button>');

    $('#boton').css({'color':'blue','background-color':'yellow'});
    //$('#boton').css('background-color', 'yellow');

    //$('#subcontenedor').remove();
    //$('#subcontenedor').hide();
    $('img').attr({'src':'logo2.png','width':'400px'});
    //$('img').attr('width', '300px');
});

