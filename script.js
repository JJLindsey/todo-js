const form = document.getElementById('form')
const input = document.getElementById('input')
const taskList = document.getElementById('tasks')
const tasks = JSON.parse(localStorage.getItem('tasks'))

//check for items is localStorage
if(tasks) {
    tasks.forEach(task => addTask(task))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTask()
})

function addTask(task){
    let taskText = input.value 

    if(task) {
        taskText = task.text
    }
    //constuct list items
    if(taskText) {
        const taskEl = document.createElement('li')
        if(task && task.completed) {
            taskEl.classList.add('completed')
        }
        //set task same as taskText
        taskEl.innerText = taskText
        //implicit arrow function to listen for left click of completed task
        taskEl.addEventListener('click', () => {
            taskEl.classList.toggle('completed')
            updateLStorage()
        })
        taskEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            //remove task from DOM on right click
            taskEl.remove()
            updateLStorage()
        })
        taskList.appendChild(taskEl)
        //clear form
        input.value = ''

        updateLStorage()
    }
}

function updateLStorage() {
    tasksEl = document.querySelectorAll('li')
    const tasks = []
    tasksEl.forEach(taskEl => {
        tasks.push({
            text: taskEl.innerText,
            completed: taskEl.classList.contains('completed')
        })
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
}


//save tasks to local storage
// localStorage.setItem('name', JSON.stringify(obj))
// //convert JSON string into an object
// JSON.parse(localStorage.getItem(obj))