// build your `Resource` model here
const db = require('../../data/dbConfig');

// Get all resources
function getResources() {
    return db('resources').select('*');
}

// Add a new resource
function addResource(resource) {
    return db('resources')
        .insert(resource)
        .returning('*')
        .then(([newResource]) => newResource);
}

module.exports = { getResources, addResource };
