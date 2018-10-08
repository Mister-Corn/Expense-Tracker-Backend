
exports.up = function(knex) {
  return knex.schema.createTable('categories', (table) => {
    table.increments('id');
    table
        .string('name', 128);
    table
        .text('description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('categories');
};
