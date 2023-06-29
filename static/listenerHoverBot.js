// Obtener todos los elementos que deseas desactivar el efecto hover
let elements = document.querySelectorAll('.marco');

// Agregar un event listener para el evento 'mousemove' a cada elemento
elements.forEach(function(element) {
    element.addEventListener('mousemove', function(event) {
        // Obtener la posición del cursor en relación al elemento
        let x = event.clientX - element.offsetLeft;
        let y = event.clientY - element.offsetTop;

        // Verificar si el cursor está dentro del último 20% de la parte inferior del elemento
        if (y > element.offsetHeight * 0.8) {
            // Desactivar el efecto hover
            element.classList.remove('hover');
            element.classList.add('noHover');
            console.log('No jover')
        } else {
            // Activar el efecto hover
            element.classList.remove('noHover');
            element.classList.add('hover');
            console.log('Jover')
        }
    });
});
