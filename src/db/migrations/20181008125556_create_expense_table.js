// blue
exports.up = function(knex) {
  return knex.schema.createTable('expenses', (table) => {
    table.increments('id');

    table
        .string('name', 128)
        .notNullable();
    
    table
        .timestamp('date')
        .defaultTo(knex.fn.now());

    table
        .text('description');
    
    table
        .float('amount')
        .notNullable();
    
    table
        .integer('budget_id')
        .notNullable()
        .references('id')
        .inTable('budgets');
    
    table
        .integer('cat_id')
        .notNullable()
        .references('id')
        .inTable('categories');
  });  
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('expenses');
};
