button = document.getElementById("button");
list = document.getElementById("list");

button.addEventListener("click", function(event){
    event.preventDefault();
    fetch("http://api.open-notify.org/astros.json")
    .then(function(response){
        response.json().then(function(data){  
            for(let i = 0; i<data.people.length; i++){
                list.innerHTML += `<li>${data.people[i].name}</li>`
            }
            })
            .catch(function(unsuccessfullParse){
                console.log(unsuccessfullParse)
        })
    })
    .catch(function(unsuccessfullResponse){
        console.log(unsuccessfullResponse)
    })
})