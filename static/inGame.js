function inGame(){
    let EJ = document.querySelector('.notContEJ')
    EJ.classList.remove('notContEJ')
    EJ.classList.add('espacioJuego')
    modCssRow('.MID','.1fr .1fr 4.8fr');
    let contR = document.querySelector('.contMR');
    contR.classList.remove('contMR');
    contR.classList.add('notContMR');
};
