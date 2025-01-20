/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    return knex.schema.createTable('projects', table => {
        table.increments('project_id'); // Primary key
        table.string('project_name').notNullable();
        table.string('project_description');
        table.boolean('project_completed').defaultTo(false);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('projects');
};