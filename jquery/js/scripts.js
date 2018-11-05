/*$(document).ready(function() {
  $('#contenido').append("con jQuery es mas facil");
});
*/
/*document.addEventListener('DOMContentLoaded',function(event) {
  var elemento = document.getElementById('contenido2');
  var parrafo = document.createElement('p');

  var texto=document.createTextNode('con javascript es mas dificil');
   parrafo.appendChild(texto);
   elemento.appendChild(parrafo);
});*/
$(function() {
  'use stric';
$('aside').load('informacion.html');
  /*$('.logo img').click(function() {
    $('main article:first').slideUp(1000);
  });
  $('aside').click(function () {
    s('main article:')
  });
  */
  /*$('#menu').on('click',function() {
    $('#navegacion').show();
  })
  */
/*$('.navegacion').show();

$('.logo img').on('click',function () {
  $(this).animate({'width':'20px'},5000);
});
$('main article img').on('mouseenter',aumentarImagen);
$('main article img').on('mouseleave',disminuirImagen);
function aumentarImagen() {
  $(this).animate({'width':'100%'});
}
function disminuirImagen() {
  $(this).animate({'width':'50%'});
}
*/
/*$('main article:first img').on('click',function() {
  $(this).attr('src','img/imagen_2.jpg');
});

$('.logo img').css({'width':'500px'});
$('main article h2').css({'color':'#db008d'});
$('aside').css({'background-color':'#e1e1e1',
                'text-transform':'uppercase',
                'padding':'20px'
});
$('.navegacion ul li a').on('mouseenter',cambiarcolor);
function cambiarcolor() {
  $('.navegacion').css('background-color','red');
}
*/
  /*$('main').on({
    click:function() {
      $(this).css("background-color","blue");
    },mouseenter: function() {
      $(this).addClass('fondorojo');
    },mouseleave:function() {
      $(this).addClass('activo');
    }
  });
  */
  //$('article:first').parent().children()[2];
  //$('main article:first h2').text('si');
  //$('.navegacion ul li:first a').attr('href','http://www.udemy.com');
  //$('.navegacion ul li:first a').attr('target','_blank');
  //$('div.logo img').attr('src','img/logo.png');
  //$('article:first img').attr('src','img/imagen_2.jpg');

  /*
  $('div.logo img').addClass('activo');
  $('#navegacion').show();
  $('#navegacion nav ul li:first').addClass('activo');

  $('.navegacion ul li a').on('click',function(e) {
    $('.navegacion ul li a').removeClass('activo');
    e.preventDefault();//preveenir accion del navegacion
    $(this).addClass('activo');
  });
  */


//  $('main article:first').hide();
/*var valor=0;
  $('div.logo img').on('click',function() {
    valor++;
    console.log('Haz hecho click en el logo'+valor);
  })*/
  /*$('div.logo img').on('click',function () {
    $(this).remove();//elimina el elemento
  })*/
  /*
  $('div.logo img').on('mouseenter',function() {
    console.log('sobre el logo');
  });
  $('div.logo img').on('mouseleave',function() {
    console.log('fuera del logo');
  });
  */

  /*var copia= $('main article:last').clone();
  var copia2=$('main article:first').clone();
  $('main').append(copia);
  $('main').prepend(copia2);
  */
  /*
  var copiato=$('main article:last').clone();
  var copiato2=$('main article:first').clone();
  $(copiato).appendTo('main');
  $(copiato2).appendTo('main');
  $('div.logo img').on('click',function() {
    console.log('haz hecho click en el logo compa arre pariente')
  });
  */
});
//$('.contenedor').find('a');
//$('main article:last p:first');
//$('main article:last p:first').hide();
