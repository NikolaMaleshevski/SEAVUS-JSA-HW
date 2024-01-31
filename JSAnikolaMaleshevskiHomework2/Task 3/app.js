let r1c1 = document.getElementById("r1c1");
let r1c2 = document.getElementById("r1c2");
let r1c3 = document.getElementById("r1c3");
let r1c4 = document.getElementById("r1c4");

let r2c1 = document.getElementById("r2c1");
let r2c2 = document.getElementById("r2c2");
let r2c3 = document.getElementById("r2c3");
let r2c4 = document.getElementById("r2c4");

let r3c1 = document.getElementById("r3c1");
let r3c2 = document.getElementById("r3c2");
let r3c3 = document.getElementById("r3c3");
let r3c4 = document.getElementById("r3c4");

let r4c1 = document.getElementById("r4c1");
let r4c2 = document.getElementById("r4c2");
let r4c3 = document.getElementById("r4c3");
let r4c4 = document.getElementById("r4c4");

let r5c1 = document.getElementById("r5c1");
let r5c2 = document.getElementById("r5c2");
let r5c3 = document.getElementById("r5c3");
let r5c4 = document.getElementById("r5c4");

let r6c1 = document.getElementById("r6c1");
let r6c2 = document.getElementById("r6c2");
let r6c3 = document.getElementById("r6c3");
let r6c4 = document.getElementById("r6c4");

let r7c1 = document.getElementById("r7c1");
let r7c2 = document.getElementById("r7c2");
let r7c3 = document.getElementById("r7c3");
let r7c4 = document.getElementById("r7c4");

let r8c1 = document.getElementById("r8c1");
let r8c2 = document.getElementById("r8c2");
let r8c3 = document.getElementById("r8c3");
let r8c4 = document.getElementById("r8c4");

let r9c1 = document.getElementById("r9c1");
let r9c2 = document.getElementById("r9c2");
let r9c3 = document.getElementById("r9c3");
let r9c4 = document.getElementById("r9c4");

let r10c1 = document.getElementById("r10c1");
let r10c2 = document.getElementById("r10c2");
let r10c3 = document.getElementById("r10c3");
let r10c4 = document.getElementById("r10c4");

let button = document.getElementById("button");

let comment = document.getElementById("comment");

button.addEventListener("click", function (e) {
    e.preventDefault()
    fetch("https://swapi.dev/api/planets/?page=1")
        .then(function (response) {
            response.json().then(function (data) {

                r1c1.innerText += data.results[0].name
                r2c1.innerText += data.results[1].name
                r3c1.innerText += data.results[2].name
                r4c1.innerText += data.results[3].name
                r5c1.innerText += data.results[4].name
                r6c1.innerText += data.results[5].name
                r7c1.innerText += data.results[6].name
                r8c1.innerText += data.results[7].name
                r9c1.innerText += data.results[8].name
                r10c1.innerText += data.results[9].name

                r1c2.innerText += data.results[0].population
                r2c2.innerText += data.results[1].population
                r3c2.innerText += data.results[2].population
                r4c2.innerText += data.results[3].population
                r5c2.innerText += data.results[4].population
                r6c2.innerText += data.results[5].population
                r7c2.innerText += data.results[6].population
                r8c2.innerText += data.results[7].population
                r9c2.innerText += data.results[8].population
                r10c2.innerText += data.results[9].population

                r1c3.innerText += data.results[0].climate
                r2c3.innerText += data.results[1].climate
                r3c3.innerText += data.results[2].climate
                r4c3.innerText += data.results[3].climate
                r5c3.innerText += data.results[4].climate
                r6c3.innerText += data.results[5].climate
                r7c3.innerText += data.results[6].climate
                r8c3.innerText += data.results[7].climate
                r9c3.innerText += data.results[8].climate
                r10c3.innerText += data.results[9].climate

                r1c4.innerText += data.results[0].gravity
                r2c4.innerText += data.results[1].gravity
                r3c4.innerText += data.results[2].gravity
                r4c4.innerText += data.results[3].gravity
                r5c4.innerText += data.results[4].gravity
                r6c4.innerText += data.results[5].gravity
                r7c4.innerText += data.results[6].gravity
                r8c4.innerText += data.results[7].gravity
                r9c4.innerText += data.results[8].gravity
                r10c4.innerText += data.results[9].gravity

                comment.innerText += "Мора да има по ефикасен начин, ама сум малку назад со материјалот"
            })
        })
        .catch(function(error){
            console.log(error)
        })
            
    .catch(function(error){
        console.log(error);
    })
})


