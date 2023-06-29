//Cada vez ue se inicia una nueva sesión, se inicializa el diccionario de resultados.
if (sessionStorage.getItem('myDict') === null){    
    var myDict = {};
    sessionStorage.setItem('myDict', JSON.stringify(myDict));
}    

var gameOver = function () {
    if (sessionStorage.getItem('gameOver')){
        document.querySelector("#save").style.display = "inline-block";
        document.querySelector("#restart").style.display = "inline-block";
        console.log('BOTONES FINALES');
    }
}

function  gameOverSave (formNameid) {  
    const rightB = document.querySelector('#rightB');
    const newUlRB = document.createElement('ul');
    if (sessionStorage.getItem('myDict') !== "{}"){    
        const myDict = JSON.parse(sessionStorage.getItem('myDict'));
        for (const [key, value] of Object.entries(myDict)) {
            const newLi = document.createElement('li');
            const strValue = String(value);
            const parts = strValue.split(',');
            const seconds = parts[0];
            newLi.textContent = `${key}: ${seconds} segundos`;
            newUlRB.appendChild(newLi);
        }
        rightB.appendChild(newUlRB);

    }      
    // Cuando se guarda un juego. Se registra.
    $(formNameid).submit(function(event) {
        event.preventDefault();
        if (sessionStorage.getItem('games')){
            var newGames = Number(sessionStorage.getItem('games'));
            var games = newGames + 1;    
        };
        console.log(games.toString());
        sessionStorage.setItem('games',games.toString());
        const rightB = document.querySelector('#rightB');
        const newUlRB = document.createElement('ul');
        const myDict = JSON.parse(sessionStorage.getItem('myDict'));
        let currentGame = sessionStorage.getItem('games')
        let valor2 = '2'
        let record = sessionStorage.getItem('record')
        fetch('/get-data?valor2=' + valor2,{method:'GET',headers: {'Content-Type':'application/json'}})
        .then(response => response.json())
        .then(data => {
            let gameD = 'Juego #' + currentGame;
            myDict[gameD] = [record, data.PA];
            sessionStorage.setItem('myDict',JSON.stringify(myDict));
            $(formNameid).html(data.message);  
            $('#rf').html('');
            $('#cuenta-regresiva').html('');
            $('#PA').html('');
        })
        .catch(error => console.error(error))     
        //Se modifica el valor de ambos elementos después de guardar el nuevo resultado del juego.
        document.getElementById('save').style.display = 'none';
        document.querySelector('#restart .switch').value = 'VOLVER A JUGAR!';
        message = document.querySelector('.message');
        message.classList.remove('message');
        message.classList.add('notMessage');
        modCssColumn('.finalStage','1fr')
        let rr = document.getElementById('restart')
        rr.style.marginLeft = '0%'
    });
};
//let tiempo = retrieveDict['game0']['tiempo'];
//o
//let tiempo = retrieveDict.game0.tiempo;
