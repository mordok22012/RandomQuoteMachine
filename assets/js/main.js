
document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://quotesondesign.com/wp-json/wp/v2/posts";
    const colors = 
    ["blue","crimson","red","green","orange","purple","pink","grey","indigo","brown","yellow"];
    
    
    let refrescarDiseño = () => {
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const colorslength = colors.length - 1;
            const colorsIndex = Math.floor(Math.random() * (colorslength - 0 + 1)) + 0;
            const dataLength = data.length -1;
            const dataIndex= Math.floor(Math.random() * (dataLength - 0 + 1)) + 0;

            document.getElementById("text").innerHTML = data[dataIndex].content.rendered;
            document.getElementById("author").innerHTML = `- ${data[dataIndex].title.rendered}`;
       
            
            $("body").css("background-color", colors[colorsIndex]);
            $(".text").css("color", colors[colorsIndex] );
            $(".btn").css("background-color", colors[colorsIndex] );
            $(".btn").css("background-color:hover", colors[colorsIndex] );
            $(".text").hide().fadeIn(1000);
            
            
           
        } )
        .catch(error => {
            console.error("Error al obtener la frase: ", error);
          });
    };

    let sendTweetQuote = () => {
        $("a").attr("href","https://twitter.com/intent/tweet?text=" + document.getElementById("text").textContent + " " + "- " + document.getElementById("author").textContent);
    }

    refrescarDiseño();
    
    document.getElementById("tweet-quote").addEventListener("click", sendTweetQuote);

    document.getElementById("new-quote").addEventListener("click", refrescarDiseño );



    

});
