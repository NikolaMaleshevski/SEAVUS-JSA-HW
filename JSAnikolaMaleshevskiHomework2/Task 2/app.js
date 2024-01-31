/**
 * Create a button When the button is clicked, get the data from a given url with an AJAX call.
Print the name of the academy in an h1 tag.
Print all student names in an unordered list.
URL: https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json
NOTE: You need to parse this data before using it.
 */

let button = document.getElementById("button");
let div = document.getElementById("div");


button.addEventListener("click", function (event) {
    event.preventDefault();
    fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
        .then(function (response) {
            response.json().then(function (data) {
                div.innerHTML += `<h1>${data.academy}</h1>`
                for (let i = 0; i < data.students.length; i++) {
                    div.innerHTML += `<ul><li>${data.students[i]}</li></ul>`
                    //site se vo razlicni listi tehnicki, couldnt figure it out :(
                };
            })
            .catch(function (error) {
                console.log(error)
            })
        })
    .catch(function(error){
        console.log(error);
    })
})