const imagenes = ["IMAGENES/MENU1.PNG", "IMAGENES/MENU2.PNG", "IMAGENES/MENU3.PNG"];
let indice = 0;

function cambiarImagen() {
  document.getElementById("Ciclo").src = imagenes[indice];
  indice = (indice + 1) % imagenes.length;
}

let intervalo = setInterval(cambiarImagen, 4000);

document.getElementById("prev").addEventListener("click", function() {
  clearInterval(intervalo);
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  document.getElementById("Ciclo").src = imagenes[indice];
  intervalo = setInterval(cambiarImagen, 4000);
});

document.getElementById("next").addEventListener("click", function() {
  clearInterval(intervalo);
  indice = (indice + 1) % imagenes.length;
  document.getElementById("Ciclo").src = imagenes[indice];
  intervalo = setInterval(cambiarImagen, 4000);
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleRacha = document.getElementById('toggleRacha');
  if (toggleRacha) {
    toggleRacha.addEventListener('click', function(event) {
      event.preventDefault(); // evita que el enlace recargue la página
      const contenido = document.getElementById('rachaContenido');
      if (contenido.style.display === 'none' || contenido.style.display === '') {
        contenido.style.display = 'block';
      } else {
        contenido.style.display = 'none';
      }
    });
  }
});