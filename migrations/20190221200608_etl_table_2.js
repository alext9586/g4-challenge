
exports.up = function(knex, Promise) {
    return knex.schema.createTable('etl_table_2', function(t) {
      t.increments('id').primary()
      t.string('created_at').notNullable()
      t.string('ip').notNullable()
      t.decimal('latitude').notNullable()
      t.decimal('longitude').notNullable()
      t.string('first_name').notNullable()
      t.string('last_name').notNullable()
      t.string('email').notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('etl_table_2')
  };
  