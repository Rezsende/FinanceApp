knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('username', 50); 
    table.string('email', 100); 
   
  });
  