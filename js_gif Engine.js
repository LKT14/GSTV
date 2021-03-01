document.querySelector(".js-go").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    s = input;
    pushToDOM(input);
  
  });
  
  document.querySelector(".js-userinput").addEventListener('keyup',function(e){
  
    var ainput = document.querySelector("input").value;
  
    // if the key ENTER is pressed...
    if(e.which === 13) {
      pushToDOM(input);
    }
  
  });
  
  /* 2. do the data stuff with the API */
  
  var url = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q="+ s;

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();
  
  GiphyAJAXCall.addEventListener('load',function(e){
  
    var data = e.target.response;
    pushToDOM(data);
  
  });
  
  
  
  
  /* 3. Show me the GIFs */
  
  
  function pushToDOM(input) {
  
    var response = JSON.parse(input);
  
    var imageUrls = response.data;
  
    imageUrls.forEach(function(image){
  
      var src = image.images.fixed_height.url;
      console.log(src);
  
      var container = document.querySelector(".js-container");
      container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
  
    });
  
  }