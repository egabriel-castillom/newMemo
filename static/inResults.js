function viewResults() {
    modCssColumn('body','.1fr .1.9fr');
    let board = document.querySelector('.notContRboard');
    board.classList.remove('notContRboard');
    board.classList.add('Rboard');
    let MID = document.querySelector('.MID');
    MID.classList.remove('MID');
    MID.classList.add('notContM');
    let contR = document.querySelector('.notContR');
    contR.classList.remove('notContR');
    contR.classList.add('contR');
}

function closeResults() {
  let board = document.querySelector('.Rboard');
  board.classList.remove('Rboard');
  board.classList.add('notContRboard');
  let MID = document.querySelector('.notContM');
  MID.classList.remove('notContM');
  MID.classList.add('MID');
  let contR = document.querySelector('.contR');
  contR.classList.remove('contR');
  contR.classList.add('notContR');
};