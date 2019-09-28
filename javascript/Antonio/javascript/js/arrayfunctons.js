fetch('http://www.mocky.io/v2/5d7d28d42f00006600fedf15').then(function(response){
    response.json().then(function(data){
        console.log(data);
    })
}).catch(function(error){
    console.log("algo deu errado");
    console.log(error);

});