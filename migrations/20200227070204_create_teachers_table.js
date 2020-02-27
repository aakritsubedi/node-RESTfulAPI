//yarn make:migration create_teachers_table
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists("teachers", table => {
    table.increments("id").primary();
    table.string("name").notNull();
    table
      .string("email")
      .unique()
      .notNull();
    table.string("password").notNull();
    table.integer("age");
    table.boolean("status").notNullable().defaultTo(false);
    table
      .timestamp("created_at")
      .notNull()
      .defaultTo(knex.raw("now()"));
    table
      .timestamp("updated_at")
      .notNull()
      .defaultTo(knex.raw("now()"));
  })
  .then(() => {
    console.log("Users Table is Created!");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("teachers").then(() => {
    console.log("Teachers Table has been Dropped!");
  });
};
