// Solo se ocupa o el signo $ o la palabra jQuery
// $(document).ready(function(){

// jQuery(document).ready(function(){
//   alert("Alerta de prueba");
// });

// Diferencias entre JS y JQ

// JS normalmente...
// function saludar(){
//   document.getElementById("saludar").innerHTML="Hola";
// }

// JQ...
// $(document).ready(function(){
//     $("button").click(function(){
//         $("#saludos").append("Saludando con jQuery");
//     });
// });

// JS normalmente...
// function agregarLista(){
//   var node=document.createElement("li");
//   var textnode=document.createTextNode("mas comida");
//   node.appendChild(textnode);
//   document.getElementById("lista").appendChild(node);
// }

// // JQ...
// $(document).ready(function(){
//     $("button").click(function(){
//         $("ul").append("<li>Más comida con jQuery</li>");
//     });
// });


// // JS normalmente...
// // function cambiarColor(){
// //   document.getElementById("resaltar").style.color="red";
// // }

// // JQ... No funciono!!! revisar!!!
// $(document).ready(function(){
//     $("#cambiarColor").click(function(){
//       $("#resaltar").css("color", "red");
//       $("#resaltar").css("background", "blue");
//     });
// });
