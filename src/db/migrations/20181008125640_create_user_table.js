// blee
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');

    table
      .string('username', 128)
      .notNullable();
    
    table
        .timestamp('createdAt')
        .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
