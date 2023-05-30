function cats(){
  url = `https://api.thecatapi.com/v1/images/search?limit=6`;
  api_key = "live_XmS0munID1WA4iBTN4uHnipohTe5g6KC7Ui8IxSFWLWgE0Pk3IsHSY1IshdhUMwG"
  fetch(url,{headers: {
    'x-api-key': api_key
  }})
  .then((response) => {
  return response.json();
  })
  .then((data) => {
  let imagesData = data;
  let incrementalVal = 0;
  imagesData.map(function(imageData) {
    let imageUrl = imageData.url;
    incrementalVal = incrementalVal + 1;
    let dato = document.getElementById('load-data' + String(incrementalVal));
    dato.style.backgroundImage = `url('${imageUrl}')`;

    incrementalVal = incrementalVal + 1;
    let datox = document.getElementById('load-data' + String(incrementalVal));
    datox.style.backgroundImage = `url('${imageUrl}')`;
  });
  })
  .catch(function(error) {
  console.log(error);
  });
}
