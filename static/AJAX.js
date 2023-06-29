function setupForm() {
  let selSw = [];
  let formNameid
  if (arguments.length > 0) {
    formNameid = arguments[0];
  }
  let messageNameid
  if (arguments.length > 1) {
    messageNameid = arguments[1];
  }
  let dataNameid
  if (arguments.length > 2) {
    dataNameid = arguments[2];
  }
  let finalResid
  if (arguments.length > 3) {
    finalResid = arguments[3];
  }
  let pAid
  if (arguments.length > 4) {
    pAid = arguments[4];
  }

  // Puedes acceder a los argumentos adicionales utilizando arguments[3], arguments[4], etc.

  $(formNameid).submit(function(event) {
      event.preventDefault();
      let formR = formNameid.replace('#','');
      let form = document.getElementById(formR);
      let elex = form.querySelector('.switch');
      if (sessionStorage.getItem('selSw') === null){
        sessionStorage.setItem('selSw', JSON.stringify(formR));
      };
      elex.classList.remove('switch');
      elex.classList.add('switchX');  
      $.ajax({
          url: '/get-data',
          type: 'POST',
          data: $(this).serialize(),
          success: function(data) {
              if (data.same){
                $(messageNameid).html(data.message);
              }else{
                if (messageNameid !== undefined){
                  $(messageNameid).html(data.message);
                } 
                if (dataNameid !== undefined){
                  $(dataNameid).html(data.id);
                  let dataNameidNoHash = dataNameid.replace(/#/g, "");
                  let element = document.getElementById(dataNameidNoHash);
                  element.classList.remove('id');
                  element.classList.add('idVisible');
                  sessionStorage.setItem('startCounter','1')
                  if (sessionStorage.getItem('crEnEjecucion') === null){
                    actualizarCuentaRegresiva();
                  }
                if (data.F !== undefined){
                  let marcos = document.querySelectorAll(".marco");
                  for (let i = 0; i < marcos.length; i++) {
                      let inputs = marcos[i].querySelectorAll("input");
                      for (let j = 0; j < inputs.length; j++) {
                          inputs[j].disabled = true;
                      }
                  }
                  setTimeout(function() {
                    var retrievedList = JSON.parse(sessionStorage.getItem('myList'));                  
                    let lastElement = retrievedList[retrievedList.length -1];
                    $(lastElement).html('');
                    $(dataNameid).html('');
                    let lastElementNoHash = lastElement.replace(/#/g, "");
                    let lastelementNH = document.getElementById(lastElementNoHash);
                    fetch('/get-data')
                    .then(response => response.json())
                    .then(data => {
                      $(messageNameid).html(data.message);  
                      $(finalResid).html(data.rf);   
                      element.classList.remove('idVisible');
                      element.classList.add('id');                     
                      lastelementNH.classList.remove('idVisible');
                      lastelementNH.classList.add('id');                    
                    })
                    .catch(error => console.error(error))
                    setTimeout(function(){
                      for (let i = 0; i < marcos.length; i++) {
                        let inputs = marcos[i].querySelectorAll("input");
                        for (let j = 0; j < inputs.length; j++) {
                            inputs[j].disabled = false;
                        }
                      };
                    },400);
                  }, 1900);
                  setTimeout(function(){
                      let selSw = JSON.parse(sessionStorage.getItem('selSw')); 
                      let lastForm = document.getElementById(selSw);
                      let lastElex = lastForm.querySelector('.switchX');
                      elex.classList.remove('switchX');
                      elex.classList.add('switch');                  
                      lastElex.classList.remove('switchX');
                      lastElex.classList.add('switch');
                      sessionStorage.removeItem('selSw');
                  },2000);
                }else{
                  var retrievedList = JSON.parse(sessionStorage.getItem('myList'));                  
                  retrievedList.push(dataNameid);
                  sessionStorage.setItem('myList', JSON.stringify(retrievedList));                  
                  };
                  //Se cambia el color del fondo, dependiendo del resultado.                  
                  if (data.rf !== undefined){
                    if (data.rf === 'CORRECTO'){
                      let espacioJuego = document.querySelector('.board');
//                      for (let i = 0; i < espacioJuego.length; i++) {
                        espacioJuego.classList.remove('board');
                        espacioJuego.classList.add('boardCorrecto');
//                      };
                      setTimeout(function(){
                      let espacioJuegoCorrecto = document.querySelector('.boardCorrecto');
//                    for (let i = 0; i < espacioJuegoCorrecto.length; i++) {
                        espacioJuegoCorrecto.classList.remove('boardCorrecto');
                        espacioJuegoCorrecto.classList.add('board');
//                      };
                      },500);                                       
                    };
                    if(data.rf === 'INCORRECTO'){
                      let espacioJuego = document.querySelector('.board');
//                      for (let i = 0; i < espacioJuego.length; i++) {
                        espacioJuego.classList.remove('board');
                        espacioJuego.classList.add('boardIncorrecto');
//                      };
                      setTimeout(function(){
                      let espacioJuegoIncorrecto = document.querySelector('.boardIncorrecto');
//                      for (let i = 0; i < espacioJuegoIncorrecto.length; i++) {
                        espacioJuegoIncorrecto.classList.remove('boardIncorrecto');
                        espacioJuegoIncorrecto.classList.add('board');
//                      };
                      },500);                                       
                    };
                  }
                  if (data.PA !== undefined){
                    sessionStorage.removeItem('selSw');
                    //Cuando se ha completado un juego con todos los puntos, genera variable de lastGameWin.
                    if (data.PA.includes('6')){
                      sessionStorage.setItem('gameOver','1');
                      sessionStorage.setItem('stopCounter','1');
                      actualizarCuentaRegresiva();                  
                      $(pAid).html('');
                      setTimeout(function() {
                        let valor1 = '1'
                        fetch('/get-data?valor1=' + valor1,{method:'GET',headers: {'Content-Type':'application/json'}})
                        .then(response => response.json())
                        .then(data => {
                          $('#message').html('');  
                          $('#rf').html('');
                          $('#cuenta-regresiva').html('RECORD: ' + sessionStorage.getItem('record')+' s.');
                        })
                        .catch(error => console.error(error))
                        let sv = document.getElementById('save')
                        let rr = document.getElementById('restart')                      
                        sv.style.display = 'inline'
                        sv.style.marginRight = '20%'
                        rr.style.display = 'inline'
                        rr.style.marginLeft = '20%'
                      }, 3000);                      
                  }
                  }          
                                    
                }
              }                                
              }     
          });
      });   
  };