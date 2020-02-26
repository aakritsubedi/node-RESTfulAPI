exports.up = function(knex) {
  return knex.schema
    .createTableIfNotExists("employees", table => {
      table.increments("id").primary();
      table.string("name").notNull();
      table
        .string("email")
        .unique()
        .notNull();
      table.string("password").notNull();
      table.integer("age");
      table.boolean("status");
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
  return knex.schema.dropTable("employees").then(() => {
    console.log("Users Table has been Dropped!");
  });
};
