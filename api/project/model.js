// build your `Project` model here
// `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided
const db = require('../../data/dbConfig');
module.exports = {
    get,
    insert,
}
function get() {
    return db('projects')
    .then(projects => {
        return projects.map(project => {
            return {
                ...project,
                project_completed: project.project_completed ? true : false
            }
        })
    })
}
function insert(project) {
    return db('projects')
    .insert(project)
    .then(([project_id]) => {
        return db('projects')
        .where('project_id', project_id)
        .first()
        .then(project => {
            return {
                ...project,
                project_completed: project.project_completed ? true : false
            }
        })
    })
}