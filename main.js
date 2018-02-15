const input = document
    .getElementById('toDoInput');

const addButton = document
    .getElementById('addButton');

const addToDo = document
    .getElementById('addToDo');

const doneToDo = document
    .getElementById('doneToDo');

const removeButton = document
    .getElementsByClassName('removeButton');

const emptyButton = document
    .getElementById('emptyButton');

function alertMessage(){
    alert("You forgot to add a new to do!");
}

// On enter keypress, event creates a new to do
// and if empty input field an alert is sent
toDoInput.addEventListener('keypress', function(e){
    const key = e.keyCode;
    if (key === 13) {
        if (input.value === '') {
            alertMessage();
        } else {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById('addButton').click();
            }
        }
    }
})

// On click, event creates li and button elements
// and if empty input field an alert is sent
addButton.addEventListener('click', function(){
    if (input.value === '') {
        alertMessage();
    } else {
        const newListElement = document
            .createElement('li');
            newListElement.innerText = input.value;

        const buttonContainer = document
            .createElement('div');
            buttonContainer.className = "buttonContainer";

        const doneButton = document
            .createElement('button');
            doneButton.className = "doneButton";
            doneButton.innerText = "Done";

        const removeButton = document 
            .createElement('button');
            removeButton.className = "removeButton";
            removeButton.innerText = "Delete";

        addToDo.appendChild(newListElement);
        newListElement.appendChild(buttonContainer);
        buttonContainer.appendChild(doneButton);
        buttonContainer.appendChild(removeButton);
        document.getElementById('toDoInput').value = '';

        // Moves completed to do to 'done deal' list and
        // removes 'done' button
        doneButton.addEventListener('click', function(){
            doneToDo.appendChild(newListElement);
            doneButton.remove();
        })

        // Deletes todo when clicked
        removeButton.addEventListener('click', function(){
            newListElement.remove();
        })
        
        // Deletes every to do on both lists
        emptyButton.addEventListener('click', function(){
            newListElement.remove();
        })
    }
})