$(document).ready(function(){

    // append index
    $('#saludo').on('click', function(){
        $('#saludo').append('<p id="bienvenido">BIENVENIDO <i class="fab fa-angellist"></i></p>');
    });

    // galeria cursos html
    $('.muestra').on('click', function(){
        source = $(this).attr('src');
        $('.principal').attr('src', source);
    });

    // prepend y append pagina contacto
    $('#apunta').on('click', function(contacto,html){
        $('#aqui').prepend('<h3 class="dinamico">AQUÍ</h3>');
    });

    $('body').on('click','.dinamico', function(){
        $('#aqui').prepend('<i class="fas fa-angle-down"></i>');
    })



})
