document.querySelector(".js-go").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    SearchGiphy(input);
  
  });
  
  document.querySelector(".js-userinput").addEventListener('keyup',function(e){
  
    var input = document.querySelector("input").value;
  
    // if the key ENTER is pressed...
    if(e.which === 13) {
      SearchGiphy(input);
    }
  
  });
  
  /* 2. do the data stuff with the API */
  function SearchGiphy(input){
  var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + input;
  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();
  
  GiphyAJAXCall.addEventListener('load',function(e){
  
    var data = e.target.response;
    pushToDOM(data);
    console.log(data);
  
  });
  }  
  
  
  
  
  /* 3. Show me the GIFs */
  
  
  function pushToDOM(input) {
  
    var response = JSON.parse(input);
  
    var imageUrls = response.data;

    var container = document.querySelector(".js-container");
    container.innerHTML = "";
  
    imageUrls.forEach(function(image){
  
      var src = image.images.fixed_height.url;
      //console.log(src);
  
      
      container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
      

    });
  
  }
