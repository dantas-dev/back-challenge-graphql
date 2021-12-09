import {Knex} from 'knex';

/**
 * Migration to initialize database - create two tables with relationships between them.
 *
 * Command:
 * ./node_modules/.bin/knex migrate:make init -x ts --connection localhost --client mysql2 --migrations-directory ./src/migrations/
 *
 * @see https://knexjs.org/#Migrations-CLI
 * @param knex
 */
export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('user', (user) => {
      user.increments('id').primary();
      user.string('name', 255).notNullable();
      user.string('email', 255).notNullable();
      user.timestamp('createdAt').notNullable().defaultTo(
        knex.raw('CURRENT_TIMESTAMP'));
      user.timestamp('updatedAt').notNullable().defaultTo(
        knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .createTable('project', (project) => {
      project.increments('id').primary();
      project.integer('userId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')
        .onDelete('cascade');
      project.string('name', 255).notNullable();
      project.float('price', 12, 2).notNullable();
      project.timestamp('createdAt').notNullable().defaultTo(
        knex.raw('CURRENT_TIMESTAMP'));
      project.timestamp('updatedAt').notNullable().defaultTo(
        knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('project').dropTable('user');
}
