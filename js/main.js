var api="AIzaSyDCl8dR-umSi8-PZX7S0S6cmEe7pFukjd0";

      function initMap() {
        var latLng={
          lat:20.729792,
          lng:-105.282817
        }
        var map = new google.maps.Map(document.getElementById('mapa'), {
          'center':latLng,
          'zoom': 19,
          'mapTypeId':google.maps.MapTypeId.ROADMAP,
          'draggable':true,
          'scrollwheel':true
        });
        var marker = new google.maps.Marker({
          position:latLng,
          map:map,
          title:'PTOVTA'
        });
        var contenido='<h2>HOTEL ARRESIFE</H2>'+
                      '<p id="parrafoarresife" class="estilomarker">En mezcales Nayarit</p>'+
                      '<p class="estilomarker">Visitanos</p>'
        var informacion= new google.maps.InfoWindow({
          content:contenido
        });
        marker.addListener('click',function() {
          informacion.open(map,marker);
        })
      }

(function() {
  "use stric";
  var regalo=document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded',function () {
      //campos pase
      var nombre=document.getElementById('nombre');
      var apellido=document.getElementById('apellido');
      var email=document.getElementById('email');

      var pase_dia=document.getElementById('pase_dia');
      var pase_dosdias=document.getElementById('pase_dosdias');
      var pase_completo=document.getElementById('pase_completo');

      //Botones y divs
      var calcular=document.getElementById('calcular');
      var errorDiv=document.getElementById('error');
      var botonesRegistro=document.getElementById('btnRegistro');
      var lista_productos=document.getElementById('lista-productos');
      var suma=document.getElementById('suma-total');

      //Exrtras
      var camisas= document.getElementById('camisa_evento');
      var cantidadEtiquetas = document.getElementById('etiquetas');

      if (calcular) {
        calcular.addEventListener('click', calcularMontos);
      }
      if (pase_dia) {
        pase_dia.addEventListener('blur',mostarDias);
      }
      if (pase_dosdias) {
        pase_dosdias.addEventListener('blur',mostarDias);
      }
      if (pase_completo) {
        pase_completo.addEventListener('blur',mostarDias);
      }

      if (nombre) {
        nombre.addEventListener('blur',validarCampos);
      }
      if (apellido) {
        apellido.addEventListener('blur',validarCampos);
      }
      if (email) {
        email.addEventListener('blur',validarCampos);
        email.addEventListener('blur',validarEmail);
      }

      function validarCampos() {
        if(this.value==''){
          errorDiv.style.display='block';
          errorDiv.innerHTML="Este campo es obligatorio";
          this.style.border='1px solid red';
          errorDiv.style.border='1px solid red';
        }else {
          errorDiv.style.display='none';
          this.style.border='1px solid #cccccc';
        }
      }
      function validarEmail() {
        if(this.value.indexOf("@") > -1){
          errorDiv.style.display='none';
          this.style.border='1px solid #cccccc';
        }else {
          errorDiv.style.display='block';
          errorDiv.innerHTML="No es un correo valido(@)";
          this.style.border='1px solid red';
          errorDiv.style.border='1px solid red';
        }
      }

      function calcularMontos(event) {
        event.preventDefault();
        console.log("Haz hecho clic en calcular");
        if(regalo.value===''){
          alert('debes elegir un regalo');
          regalo.focus();
        }else{
            var boletoDia=parseInt(pase_dia.value,10) || 0,
            boleto2Dias=parseInt(pase_dosdias.value,10) || 0,
            boletoCompleto=parseInt(pase_completo.value,10) || 0,
            cantidadCamisas=parseInt(camisas.value,10) || 0,
            canEtiquetas=parseInt(cantidadEtiquetas.value,10) || 0;
            var totalPagar= ( boletoDia * 30 ) + ( boleto2Dias * 45 ) + ( boletoCompleto * 50 )+((cantidadCamisas*10)*.93)+(canEtiquetas*2);
            var listadoProductos = [];
            if(boletoDia>=1){
                listadoProductos.push(boletoDia+ ' Pases por Dia');
            }
            if (boleto2Dias>=1) {
              listadoProductos.push(boleto2Dias+ ' Pases por 2 dias');
            }
            if (boletoCompleto>=1) {
              listadoProductos.push(boletoCompleto+ ' Pases por Todos los dias');
            }
            if (cantidadCamisas>=1) {
              listadoProductos.push(cantidadCamisas+ ' Total de Camisas');
            }
            if (canEtiquetas>=1) {
              listadoProductos.push(canEtiquetas+ ' Cantidad de Etiquetas');
            }
            //lista_productos.style.display="block";
            lista_productos.innerHTML='';
            for (var i = 0; i < listadoProductos.length; i++) {
              lista_productos.innerHTML += listadoProductos[i]+'<br>';
            }
            suma.innerHTML='$ '+totalPagar.toFixed(2);

        }
      }
      function mostarDias() {

        var boletoDia = parseInt(pase_dia.value,10) || 0;
        var boleto2Dias = parseInt(pase_dosdias.value,10) || 0;
        var boletoCompleto = parseInt(pase_completo.value,10) || 0;

        var diasElegidos=[];

        if (boletoDia>0) {
          diasElegidos.push('viernes');
          console.log(diasElegidos);
          console.log(boletoDia);
        }
        if (boleto2Dias>0) {
          diasElegidos.push('viernes','sabado');
          console.log(diasElegidos);
          console.log(boleto2Dias);
        }
        if (boletoCompleto>0) {
          diasElegidos.push('viernes','sabado','domingo');
          console.log(diasElegidos);
          console.log(boletoCompleto);
        }
        for (var i = 0; i < diasElegidos.length; i++) {
          document.getElementById(diasElegidos[i]).style.display = 'block';
        }
      }
  }); //DOM CONTENT LOADED
})();

$(function() {
  //LETTERING
$('.nombre-sitio').lettering();

/*MENU FIJO*/
var windowsheight = $(window).height();
var barraAltura = $('.barra').innerHeight();

console.log(barraAltura);
$(window).scroll(function(){
  var scroll=$(window).scrollTop();
  console.log('scroll '+scroll);
  console.log('windowheight '+windowsheight);
  if(scroll > windowsheight){
    //console.log("Ya arrebasaste la altura de la pantalla");
    $('.barra').addClass('fixed');
    $('body').css({'margin-top': barraAltura+'px'});
  }else {
    $('.barra').removeClass('fixed');
    $('body').css({'margin-top':'0px'});
  }
});
//Menu Responsive
$('.menu-movil').on('click',function() {
    $('.navegacion-principal').slideToggle();/**/
});



  //PROGRAMA DE CONFERENCIAS
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');
  $('.menu-programa a').on('click',function() {
    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');
    $('.ocultar').hide();
     var enlace= $(this).attr('href');
     $(enlace).fadeIn(1000);
     return false;
  });
  //ANIMACIONES PARA LOS NUMEROS
  $('.resumen-evento li:nth-child(1) p').animateNumber({number:6},1200);
  $('.resumen-evento li:nth-child(2) p').animateNumber({number:15},2000);
  $('.resumen-evento li:nth-child(3) p').animateNumber({number:3},1000);
  $('.resumen-evento li:nth-child(4) p').animateNumber({number:9},2100);

  //Cuenta regresiva
  $('.cuenta-regresiva').countdown('2018/07/01 07:00:00',function(event) {
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
  });
});
