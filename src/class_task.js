class Task {
    constructor(title, desc) {
        this.title = title
        this.desc = desc
    }
}

function createTask(title, desc) {
    let task = new Task(title, desc)
    return task
}

export { Task, createTask }