fetch("https://api.giphy.com/v1/gifs/random?api_key=wa6fIGDUO1f0LJKLS8EppooJQ91pnmFE&tag=animal+fashion&rating=g")
.then(function(response) {
    if (response.status == 200) {
        return response.json();
    }
    else{
        console.log("Whoops somthing go wrong")
        alert("Whoops somthing go wrong")
    }
    
})
.then(function(jsonData) {
    console.log(jsonData);
    var gifUrl = jsonData.data.images.original.url;
    console.log(gifUrl);
    var titleUrl = jsonData.data.title;
    console.log(titleUrl);

    var title = document.createElement("h3");
    title.innerHTML = titleUrl;
    document.body.appendChild(title);

    var gifImg = document.createElement("img");
    gifImg.setAttribute("src", gifUrl);
    document.body.appendChild(gifImg);

})
.catch(function(error) {
    console.log("There was an issue...", error)
    alert("There was an issue")
})
 
