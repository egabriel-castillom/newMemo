var button = document.querySelector('#myButton');
// Agregar un 'listener' al botón
button.addEventListener('click', event => {
  // Obtener el valor del botón
  const selectedValue = event.target.innerHTML;
  // Modificar la plantilla en función del valor seleccionado
  if (selectedValue === 'Perros') {
    // Código para modificar la plantilla cuando se selecciona perros
    document.body.style.backgroundImage = "url('static/dog.jpg')";
  } else if (selectedValue === 'Gatos') {
    // Código para modificar la plantilla cuando se selecciona gatos
    document.body.style.backgroundImage = "url('static/cat.jpg')";
  }
});
