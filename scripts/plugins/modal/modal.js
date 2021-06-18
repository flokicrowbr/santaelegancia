// Pega o modal


// Pega a imagem e coloca ela dentro do modal - usa o "alt" como descrição


var captionText = document.getElementById("caption");

console.log(document.getElementsByClassName("modal-content"));
document.getElementsByClassName("modal-content");

var lista_de_elementos_fotos = document.getElementsByClassName("modal-content");


for (let index = 0; index <= lista_de_elementos_fotos.length - 1; index++) {
    var id = index+1;
    console.log(id);
    var modalImg = lista_de_elementos_fotos[index];
    var img = document.getElementById("myImg"+id);
    var modal = document.getElementById("myModal"+id);
    console.log(modal);

    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[index];

// Quando o usuario clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
  }
    
}


