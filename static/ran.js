var ran = function(){
    var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    var _a;
    // Obtener todos los elementos que deseas reorganizar
    var elements = document.querySelectorAll('.marco');
    // Crear una lista de índices
    var indices = __spreadArray([], Array(elements.length), true).map(function (_, i) { return i; });
    // Mezclar aleatoriamente la lista de índices
    for (var i = indices.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [indices[j], indices[i]], indices[i] = _a[0], indices[j] = _a[1];
    }
    // Reorganizar los elementos en el orden especificado por la lista mezclada
    var parentElement = elements[0].parentNode;
    indices.forEach(function (i) {
        if (parentElement) {
            parentElement.appendChild(elements[i]);
        }
    });
    // Almacenar el orden de los elementos en una variable de sesión
    sessionStorage.setItem('indices', JSON.stringify(indices));
    }
