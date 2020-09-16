exports.up = function(knex) {
    return knex.schema.createTable('leads', function (table){

       table.increments();

       table.string('title').notNullable();
       table.string('description').notNullable();
       table.string('whatsapp').notNullable();
       table.decimal('value').notNullable();
      
       table.foreign('empresa_id').references ('id').inTable('empresas');
       table.string('empresa_id').notNullable(); 

       
       //table.foreign('empresa_id').notNullable().references('id').inTable('empresas')
     });
   };
   
   exports.down = function(knex) {
    return knex.schema.dropTable('leads');
   };