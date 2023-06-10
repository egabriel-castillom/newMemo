 var actualizarCuentaRegresiva = function () {
    if (sessionStorage.getItem('stopCounter')) {
        var tiempoRestante = Number(sessionStorage.getItem('tiempoRestante'));
        var elementoCuentaRegresiva = document.getElementById('cuenta-regresiva');
        elementoCuentaRegresiva.textContent = "".concat(tiempoRestante, " segundos.");
        sessionStorage.setItem('tiempoRestante',tiempoRestante.toString())     
        var record = 60 - Number(sessionStorage.getItem('tiempoRestante'));
        sessionStorage.setItem('record',record.toString())                
    }else if (sessionStorage.getItem('startCounter')) {
        var tiempoRestante = Number(sessionStorage.getItem('tiempoRestante')) || 60; // 60 segundos
        var elementoCuentaRegresiva = document.getElementById('cuenta-regresiva');
        let startCounter = sessionStorage.getItem('startCounter')
        if (elementoCuentaRegresiva) {
            elementoCuentaRegresiva.textContent = "".concat(tiempoRestante, " segundos restantes");
        }
        tiempoRestante -= 1;
        if (tiempoRestante === 0) {
            //El tiempo se ha acabado, entoces finalstage 
            //sólo puede mostrar 1 elemento a la vez
            modCssColumn('.finalStage', '1fr')
            setTimeout(function() {
                let valor1 = '1'
                fetch('/get-data?valor1=' + valor1,{method:'GET',headers: {'Content-Type':'application/json'}})
                .then(response => response.json())
                .then(data => {
                  $('#message').html(data.message);  
                  $('#rf').html('');
                  $('#cuenta-regresiva').html('¡SE HA ACABADO EL TIEMPO!');
                })
                .catch(error => console.error(error))
              }, 1000); 

              let marcos = document.querySelectorAll(".marco");
            for (let i = 0; i < marcos.length; i++) {
                let inputs = marcos[i].querySelectorAll("input");
                for (let j = 0; j < inputs.length; j++) {
                    inputs[j].disabled = true;
                }
            };
            sessionStorage.setItem('stopCounter', '1');
            let rr = document.getElementById('restart')
            rr.style.display = 'inline-block'
            document.querySelector('#restart .switch').value = 'VOLVER A JUGAR!';
        };
        sessionStorage.setItem('tiempoRestante', tiempoRestante.toString());
        console.log('Restando uno..');
        if (tiempoRestante >= 0) {
            setTimeout(actualizarCuentaRegresiva, 1000);
        }
        sessionStorage.setItem('crEnEjecucion','1');
    };
}
        
var igualASesenta = function () {
    var elementoCuentaRegresiva = document.getElementById('cuenta-regresiva');
    sessionStorage.setItem('tiempoRestante','60');
    elementoCuentaRegresiva.textContent = 'Tienes 1 minuto, elige una opción para comenzar'
}
