import Knex from 'knex';

export async function up(knex: Knex) {
    //criar a tabela
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        //criando a chave estrangeira com references(id).inTable
        table.integer('point_id').notNullable().references('id').inTable('points');
        
        table.integer('item_id').notNullable().references('id').inTable('items');;
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items');
}