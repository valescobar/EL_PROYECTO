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
    // esto iba sobre un iframe pero puse una imagen referiancial por error 404
    $('#apunta').on('click', function(){
        $('#aqui').prepend('<h3 class="dinamico">AQUÍ</h3>');
    });

    $('body').on('click','.dinamico', function(){
        $('.arrow').remove();
        $('#aqui').append('<i class="fas fa-angle-down arrow"></i>');
    })



})
