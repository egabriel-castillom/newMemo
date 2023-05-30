function dogs(){
    let url = `https://api.thedogapi.com/v1/images/search?limit=6`;
    let api_key = "live_5mZjcaMrD2dsLg1aZ8wt7MOZrhwCtyT4nEfcnatJwTN3LjwF3RD5brvxUIgbT9PJ"  
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
  