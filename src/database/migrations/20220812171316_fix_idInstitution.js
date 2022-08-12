/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('institutions', (table) => {
    table.renameColumn('idinstitutions', 'id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('donations', (table) => {
    table.renameColumn('id', 'iddonation')
  })
}
