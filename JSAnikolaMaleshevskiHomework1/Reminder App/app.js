/**
 * Create a reminder app
There should be:
An input for entering the title
An input for entering priority (Low, medium, High)
An input for color
A textarea for adding a description
A button for adding the reminder
A button for showing all reminders
When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
The object should then be added to an array of reminders
When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
The title should be the color of the "color" property
 */

titleInput = document.getElementById("title");
priorityInput = document.getElementById("priority");
colorInput = document.getElementById("color");
descriptionInput = document.getElementById("description");
addButton = document.getElementById("add");
showAllButton = document.getElementById("showAll");
table = document.getElementById("table");

reminderArray = [];

function Reminder(title,priority,color,description){
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;    
};

addButton.addEventListener("click",function(event){
    event.preventDefault()
    let reminderTitle = titleInput.value;
    let reminderPriority = priorityInput.value;
    let reminderColor = colorInput.value;
    let reminderDescription = descriptionInput.value;
    let reminder = new Reminder(reminderTitle,reminderPriority,reminderColor,reminderDescription);
    reminderArray.push(reminder);
    console.log(`Number of Reminders: ${reminderArray.length}`)
});

showAllButton.addEventListener("click", function(event){
    event.preventDefault();
    for(let i = 0; i<reminderArray.length; i++){
        table.innerHTML += `<tr><td style="color: ${reminderArray[i].color};">${reminderArray[i].title}</td><td>${reminderArray[i].priority}</td><td>${reminderArray[i].description}</td></tr>`
    }
})






