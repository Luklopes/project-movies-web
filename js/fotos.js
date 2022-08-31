//miniaturas seja mostrada logo quando a pagina é carregada, assim como a borda da miniatura é mostrada.
imgHtml = document.getElementById("miniaturas").firstElementChild.firstElementChild.src;
document.getElementById("miniaturas").firstElementChild.firstElementChild.className+="active";
document.querySelector(".imagemGrande").innerHTML = '<img src="'+imgHtml+'" />';

//chamada no onclick
function mostraImagem(id) {
    var imagens = document.getElementsByTagName("img");
    for(var i = 0; i<imagens.length; i++){
        imagens[i].removeAttribute("class");
    }
    var imagem = document.querySelector("#" + id);
    imagem.removeAttribute("class");
    imagem.className += "active";
    document.querySelector(".imagemGrande").innerHTML = '<img src="'+imagem.getAttribute("src")+'" />';
}




