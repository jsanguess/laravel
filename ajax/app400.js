// $(document).ready(function(){
//     console.log('funcionando');
// });
$(document).ready(function () {
    // $('h1').html('Etiqueta h1');
    // $('.display-4').html('desde clase');
    // $('#idh1').html('desde id')
    // document.querySelector('h1').innerHTML= 'h1'
    // $('.container h1:first').html('cambio de texto')
    // $('.container h1:last').html('cambio de texto')

    // // agregando clase
    // $('h1').addClass('display-4');

    // // quitando clase
    // $('h2').removeClass('text-center');

    $('#idh1').addClass('text-danger');
    $('h2').removeClass('text-center');
    $('#contenido').append('<h1>Este es un elemento al final</h1>');
    $('#contenido').prepend('<h1>Este es un elemento al principio</h1>');
    $('#color-azul').css({color: 'blue', background: 'gray', opacity: '0.6', });
    // $('#color-azul').remove();
    $('img').attr('src', 'https://i.pinimg.com/474x/dd/7f/29/dd7f296e0ce62e15c754977c3aac0861.jpg');
    $('#tv').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSf6PLT1PIiRax7-8pBXlv_zeWd5D88y4z8w&usqp=CAU');
    $('img').attr('width', '500');
    $('#color-azul').attr('style', 'background-color: DodgerBlue');
});