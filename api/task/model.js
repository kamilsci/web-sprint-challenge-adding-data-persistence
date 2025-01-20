// build your `Task` model here

const db = require('../../data/dbConfig');

// Get all tasks with associated project name and description
function getTasks() {
    return db('tasks')
        .join('projects', 'tasks.project_id', '=', 'projects.project_id')
        .select(
            'tasks.task_id',
            'tasks.task_description',
            'tasks.task_notes',
            'tasks.task_completed',
            'projects.project_name',
            'projects.project_description'
        )
        .then(tasks =>
            tasks.map(task => ({
                ...task,
                task_completed: !!task.task_completed, // Convert to boolean
            }))
        );
}

// Add a new task
function addTask(task) {
    return db('tasks')
        .insert(task)
        .returning('*')
        .then(([newTask]) => ({
            ...newTask,
            task_completed: !!newTask.task_completed, // Convert to boolean
        }));
}

module.exports = { getTasks, addTask };