//Cada vez que se inicia una nueva sesión, se asigna el valor de juegos a 0.
if (sessionStorage.getItem('games') === null){
    var games = 0;
    sessionStorage.setItem('games',games.toString());
};

let marcos = document.querySelectorAll(".marco");
for (let i = 0; i < marcos.length; i++) {
    let inputs = marcos[i].querySelectorAll("input");
    for (let j = 0; j < inputs.length; j++) {
        inputs[j].disabled = true;
    }
};


function initStart(start,message) {      
    $(start).submit(function(event) {
        let idButton = document.getElementById("myButton");
        event.preventDefault();
        console.log(idButton.innerHTML);
        inGame();
        if(idButton.innerHTML === 'Perros' || idButton.innerHTML === 'Gatos'){
            $.ajax({
                url: '/get-data',
                type: 'POST',
                data: $(this).serialize(),
                success: function(data) { 
                    if (data !== undefined){
                    $(message).html(data.message);
                    sessionStorage.setItem('startCounter','1')
                    }    
                    igualASesenta();                       
                    if (idButton.innerHTML === 'Perros') {
                        dogs();
                    }
                    if (idButton.innerHTML === 'Gatos') {
                        cats();
                    }
                    document.getElementById('startMemo').style.display = 'none';     
                }
            });    
            if (sessionStorage.getItem('myDict') === null){
                var myDict = {};    
                sessionStorage.setItem('myDict', JSON.stringify(myDict));
            }
            var myList = [];
            sessionStorage.setItem('myList', JSON.stringify(myList));
            for (let i = 0; i < marcos.length; i++) {
                let inputs = marcos[i].querySelectorAll("input");
                for (let j = 0; j < inputs.length; j++) {
                    inputs[j].disabled = false;
                }
            };
            let clearButton = document.querySelector('.noSwitch');
            clearButton.classList.remove('noSwitch');
            clearButton.classList.add('switch');
            let choiceButton = document.querySelector('.cont')
            choiceButton.classList.remove('cont');
            choiceButton.classList.add('notCont');
            //Por defecto, al seleccionar el tipo de memorama e iniciarlo, se muestran
            //las imagenes por diez segundos y después se ocultan para después reorganizarse
            //de manera aleatoria.
            let switches = document.querySelectorAll('.marco .carta .switch');
            for (let i = 0; i < switches.length; i++) {
                switches[i].classList.remove('switch');
                switches[i].classList.add('switchX');
            };
            let animalImg = document.querySelectorAll('.marco .carta .id');
            for (let i = 0; i < animalImg.length; i++) {
                animalImg[i].classList.remove('id');
                animalImg[i].classList.add('idVisible');
            };
            tiempo = document.querySelector('.tiempo');
            tiempo.classList.remove('tiempo');
            tiempo.classList.add('notTiempo');
            message = document.querySelector('.message');
            message.classList.remove('message');
            message.classList.add('notMessage');
            setTimeout(function(){
                //Ocultar y randomizar después de 10 segundos
                let animalImg = document.querySelector('.idVisible');
                for (let i = 0; i < animalImg.length; i++) {
                    animalImg[i].classList.remove('idVisible');
                    animalImg[i].classList.add('id');
                };
                setTimeout(function(){
                    notMessage = document.querySelector('.notMessage');
                    notMessage.classList.remove('notMessage');
                    notMessage.classList.add('message');
                    notTiempo = document.querySelector('.notTiempo');
                    notTiempo.classList.remove('notTiempo');
                    notTiempo.classList.add('tiempo');
                    let switches = document.querySelectorAll('.marco .carta .switchX');
                    for (let i = 0; i < switches.length; i++) {
                        switches[i].classList.remove('switchX');
                        switches[i].classList.add('switch');
                    };
                    setTimeout(function(){
                        ran();
                    },500);
                },500);
            },10000);
        }else{
            $(message).html('Por favor selecciona PERROS o GATOS para iniciar el juego.');
        };

});
  };

  