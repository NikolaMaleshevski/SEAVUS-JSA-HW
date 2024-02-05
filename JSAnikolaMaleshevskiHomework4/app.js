/**
 * Task 1
Use the https://jsonplaceholder.typicode.com/todos.

First, get the todo with id 1 (https://jsonplaceholder.typicode.com/todos/1).
Then, log the todo from the response

then use the userId from the response and get the details for that user (https://jsonplaceholder.typicode.com/users/[userId])

Log the details for the user
 */
fetch("https://jsonplaceholder.typicode.com/todos")
.then(function(response){
    response.json().then(function(data){
        for(let i = 0; i<data.length; i++){
            if(data[i].id == 1){
                console.log(data[i])
                fetch(`https://jsonplaceholder.typicode.com/users/${data[i].userId}`)
                .then(function(response){
                    response.json().then(function(data){
                        console.log(data);
                    })
                    .catch(function(error){
                        console.log(error)
                    })
                })
                .catch(function(error){
                    console.log(error)
                })
                return
            }
        }
    })
    .catch(function(error){
        console.log(error)
    })
})
.catch(function(error){
    console.log(error)
})




