// blahsies
exports.up = function(knex) {
    return knex.schema.createTable('budgets', (table) => {
        table.increments('id');

        table
            .string('name', 128)
            .notNullable();
        
        table
            .text('description');
        
        table
            .float('amt_allocated')
            .notNullable();
        
        table
            .integer('owner_id')
            .notNullable()
            .references('id')
            .inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('budgets');
};
