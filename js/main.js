// Para que se ejecute jQuery hasta que cargue la pagina
$(document).ready(function(){

  $("img").hide();
  $("#slide1").show();


  $(".dot1").click(function(){
    $("img").hide();
    $("#slide1").show();
  });

  $(".dot2").click(function(){
    $("img").hide();
    $("#slide2").show();
  });

  $(".dot3").click(function(){
    $("img").hide();
    $("#slide3").show();
  });

  $(".dot4").click(function(){
    $("img").hide();
    $("#slide4").show();
  });

  $(".dot5").click(function(){
    $("img").hide();
    $("#slide5").show();
  });

});
