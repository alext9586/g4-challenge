
exports.up = function(knex, Promise) {
    return knex.schema.createTable('customers', function(t) {
      t.increments('id').primary()
      t.string('email').nullable().defaultTo(null)
      t.string('first_name').nullable().defaultTo(null)
      t.string('last_name').nullable().defaultTo(null)
      t.string('ip').nullable().defaultTo(null)
      t.decimal('latitude').nullable().defaultTo(null)
      t.decimal('longitude').nullable().defaultTo(null)
      t.string('created_at').notNullable()
      t.string('updated_at').defaultTo(null)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('customers')
  };
  