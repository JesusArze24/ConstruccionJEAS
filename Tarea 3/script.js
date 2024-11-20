// Definición de las imágenes en el arreglo
let imagenes = [
    "/Tarea 3/imagenes/Foto 1.jpg",
    "/Tarea 3/imagenes/Foto 2.jpg",
    "/Tarea 3/imagenes/Foto 3.jpg",
    "/Tarea 3/imagenes/Foto 4.jpg",
    "/Tarea 3/imagenes/Foto 5.jpeg",
    "/Tarea 3/imagenes/Foto 6.jpg",
    "/Tarea 3/imagenes/Foto 7.jpg"
  ];

  let indice = 0;

  const imagenActual = document.getElementById("imagen_principal");
  const anterior = document.getElementById("anterior");
  const siguiente = document.getElementById("siguiente");
  const estado = document.getElementById("indicador_de_estado");

  function actualizarBotones() {
    anterior.disabled = indice === 0;
    siguiente.disabled = indice === imagenes.length - 1;
  }

  function actualizarVista() {
    imagenActual.src = imagenes[indice];
    estado.textContent = `Imagen ${indice + 1} de ${imagenes.length}`;
    actualizarBotones();
  }

  function irAtras() {
    if (indice > 0) {
      indice--;
      actualizarVista();
    }
  }

  function irAdelante() {
    if (indice < imagenes.length - 1) {
      indice++;
      actualizarVista();
    }
  }

  anterior.addEventListener("click", irAtras);
  siguiente.addEventListener("click", irAdelante);

  actualizarVista();