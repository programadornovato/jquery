$(document).ready(function(){
    //$('.chosen-select').chosen();

    //$('.chosen-select').chosen({no_results_text:"Ups no hay nada que diga: "});

    //$('.chosen-select').chosen({disable_search_threshold:11});

    //$('.chosen-select').chosen({max_selected_options:3});

    //$('.chosen-select').chosen({rtl:true,max_selected_options:3});

    $('.chosen-select').chosen().change(function(){
        //alert("cambio");
        alert($(this).val());
    });
});

