const toDoInput = document
    .getElementById('toDoInput');

function alertMessage() {
    alert("You forgot to add a new to do!");
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
        const newListElement = document
            .createElement('li');
        newListElement.innerText = toDoInput.value;

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

        /* Moves completed to do to 'done deal' list and
        removes 'done' button */
        doneButton.addEventListener('click', function () {
            buttonContainer.className = "deleteButtonContainer";
            doneToDo.appendChild(newListElement);
            doneButton.remove();
        })

        // Deletes todo from 'stuff to do' list when clicked
        removeButton.addEventListener('click', function () {
            newListElement.classList.add('fadeOut');
            setTimeout(function () {
                newListElement.remove();
            }, 400);
        })

        // Deletes every to do on both lists
        emptyButton.addEventListener('click', function () {
            newListElement.classList.add('fadeOut');
            setTimeout(function () {
                newListElement.remove();
            }, 400);
        })
    }
})