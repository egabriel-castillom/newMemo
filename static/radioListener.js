  var radioButtons = document.querySelectorAll('input[type=radio][name=animal]');

  // Agregar un 'listener' a cada elemento de entrada de tipo 'radio'
  radioButtons.forEach(radio => {
    radio.addEventListener('change', event => {
      // Obtener el valor del elemento seleccionado
      const selectedValue = event.target.value;
      // Modificar la plantilla en función del valor seleccionado
      if (selectedValue === 'perros') {
        // Código para modificar la plantilla cuando se selecciona perros
      } else if (selectedValue === 'gatos') {
        // Código para modificar la plantilla cuando se selecciona gatos
      }
    });
  });
