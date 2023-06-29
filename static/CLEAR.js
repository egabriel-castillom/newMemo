function clearSC(){ //Al seleccionar el botón clear, ejecutar la instrucción
    if (sessionStorage.getItem('myDict') !== null){
        var tempd = JSON.parse(sessionStorage.getItem('myDict'));         
    }
    if (sessionStorage.getItem('games') !== null){
        var tempg = sessionStorage.getItem('games');         
    }
    sessionStorage.clear()
    sessionStorage.setItem('myDict', JSON.stringify(tempd));
    sessionStorage.setItem('games', tempg);
}

