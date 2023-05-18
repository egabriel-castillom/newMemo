//Cada vez que se inicia una nueva sesión, se asigna el valor de juegos a 0.
if (sessionStorage.getItem('games') === null){
    var games = 0;
    sessionStorage.setItem('games',games.toString());
};

function initStart(start,message) {      
    $(start).submit(function(event) {
        event.preventDefault();
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
                ran();
                //indx(); //Quizàs seas para recuperar los elementos ya almacenados.
                if ($('#perros').is(':checked')) {
                    dogs();
                }
                if ($('#gatos').is(':checked')) {
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
    if (sessionStorage.getItem('games')){
        var newGames = Number(sessionStorage.getItem('games'));
        var games = newGames + 1;
    };
    console.log(games.toString());
    sessionStorage.setItem('games',games.toString());
});
  }

  