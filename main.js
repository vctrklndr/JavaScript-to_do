const alert = document.getElementById('alert');
const toDoInput = document.getElementById('toDoInput');
const addButton = document.getElementById('addButton');
const toDos = document.getElementById('toDos');
const emptyAllButton = document.getElementById('emptyAllButton');

/* Function for alert message that appends a p-tag in
the alert div in DOM */
function alertMessage() {
    const alertParagraph = document.createElement('p');

    alertParagraph.innerHTML = 
        "<span class='boldText'>Ops!</span> You forgot to add a new to do!";
    alert.appendChild(alertParagraph);

    /* Prevents that more than one alert paragraph is printed
    if addButton is clicked */
    addButton.addEventListener('click', function () {
        alertParagraph.remove();
    })
    
    /* Prevents that more than one alert paragraph is printed
    when enter key is pressed or if a new to do is being written */
    toDoInput.addEventListener('keypress', function (e) {
        const enterKey = e.keyCode;
        if (enterKey === 13 && toDoInput.value === '') {
            alertParagraph.remove();
        } else {
            alertParagraph.classList.add('fadeOut');
            setTimeout(function () {
                alertParagraph.remove();
            }, 200);
        }
    })

    // Removes alert paragraph if emptyALlButton is clicked
    emptyAllButton.addEventListener('click', function () {
        alertParagraph.remove();
    })
}

/* Function for creating a new list item with done and 
delete buttons */
function createNewToDo() {
    const listItem = document.createElement('li');
    const buttonContainer = document.createElement('div');
    const doneButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    listItem.innerText = toDoInput.value;

    buttonContainer.className = "buttonContainer";
    doneButton.className = "doneButton";
    doneButton.innerText = "Done";
    deleteButton.className = "deleteButton";
    deleteButton.innerText = "Delete";

    toDos.appendChild(listItem);
    listItem.appendChild(buttonContainer);
    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(deleteButton);
    document.getElementById('toDoInput').value = '';

    /* Moves completed to do to 'done deal' list and
    removes 'done' button */
    doneButton.addEventListener('click', function () {
        buttonContainer.className = "deleteButtonContainer";
        doneToDo.appendChild(listItem);
        doneButton.remove();
    })

    function removeItems() {
        listItem.classList.add('fadeOut');
        setTimeout(function () {
            listItem.remove();
        }, 200);
    }

    // Deletes todo from 'stuff to do' list when clicked
    deleteButton.addEventListener('click', function () {
        removeItems();
    })

    // Deletes every to do on both lists
    emptyAllButton.addEventListener('click', function () {
        removeItems();
    })
}

/* On enter key, event creates a new to do
and if empty input field – an alert is sent */
toDoInput.addEventListener('keypress', function (e) {
    const enterKey = e.keyCode;
    if (enterKey === 13) {
        if (toDoInput.value === '') {
            alertMessage();
        } else {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById('addButton').click();
            }
        }
    }
})

/* On click, event creates li and button elements
and if empty input field – an alert is sent */
addButton.addEventListener('click', function () {
    if (toDoInput.value === '') {
        alertMessage();
    } else {
        createNewToDo();
    }
})