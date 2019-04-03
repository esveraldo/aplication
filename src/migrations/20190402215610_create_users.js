
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t){
      t.increments('id').primary();
      t.string('name').notNull();
      t.string('email').notNull().unique();
      t.string('pass').notNull();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
