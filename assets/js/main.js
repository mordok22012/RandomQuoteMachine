//$("selector").accion 

/* codigo para para ejecutar jquery cuando carga por completo la pagina

$("document").ready(function() {

} );

"forma rapida"
$(function() {

} )

" usar css dentro de jquery"

    $(function() {
        $("p").css({"background-color": "red"})
} )

" manejar eventos "

$(function() {
    $("button").click(function() {
        alert("hola");
    } )
} )

*/
let index;
let max = 10;
let min = 0;


let colors = 
    ["blue","crimson","red","green","orange","purple","pink","grey","indigo","brown","yellow"];


document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://quotesondesign.com/wp-json/wp/v2/posts";

   document.getElementById("new-quote").addEventListener("click", function() {
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        max = (data.length)-1;
        index=Math.floor(Math.random() * (max - min) + min); 
        document.getElementById("text").innerHTML = data[index].content.rendered;
        document.getElementById("author").innerHTML = data[index].title.rendered;
   
        $(":header").css("color", colors[index]);
        $("body").css("background-color", colors[index]);
        $("button").css("background-color", colors[index] );
       
    } )
    .catch(error => {
        console.error("Error al obtener la frase: ", error);
      });

   } );

    

});
