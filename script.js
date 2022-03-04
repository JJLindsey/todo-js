const form = document.getElementById('form')
const input = document.getElementById('input')
const taskList = document.getElementById('tasks')

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
        taskEl.addEventListener('click', () => taskEl.classList.toggle('completed'))
        taskEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            //remove task from DOM on right click
            taskEl.remove()
        })
        taskList.appendChild(taskEl)
        //clear form
        input.value = ''
    }
}