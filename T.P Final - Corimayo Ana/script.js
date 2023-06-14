
alert("!!!Bienvenido a esta seccion de la pagina!!!")

let elementosinput = document.getElementsByClassName("forminput")

for (let i=0;i < elementosinput.length;i++){
    elementosinput[i].addEventListener('keyup',function() {
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add("dejartopinput");
           
         } else {
           this.nextElementSibling.classList.remove("dejartopinput");
        }
    });
}

function agregarAlCarrito() {
    alert("Esta seccion aun no esta habilitada¡Próximamente, podras comprar el producto!");
  }




