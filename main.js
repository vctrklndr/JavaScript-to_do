const input = document
    .getElementById('toDoInput');

const addButton = document
    .getElementById('addButton');

const addToDo = document
    .getElementById('addToDo');

const doneToDo = document
    .getElementById('doneToDo');

const emptyButton = document
    .getElementById('emptyButton');

// On enter key, key up, event creates a new to do
toDoInput.addEventListener('keyup', function(){
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('addButton').click();
    }
});

// On click, event creates li and button elements
addButton.addEventListener('click', function(){
    const listElement = document
        .createElement('li');
        listElement.innerText = input.value;

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

    addToDo.appendChild(listElement);
    listElement.appendChild(buttonContainer);
    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(removeButton);
    document.getElementById('toDoInput').value = '';

    // Moves completed to do to 'done deal' list and
    // removes 'done' button
    doneButton.addEventListener('click', function(){
        doneToDo.appendChild(listElement);
        doneButton.remove();
    })

    // Deletes todo when clicked
    removeButton.addEventListener('click', function(){
        listElement.remove();
    })
    
    // Deletes every to do both lists
    emptyButton.addEventListener('click', function(){
        listElement.remove();
    })
})