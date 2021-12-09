const knex = require('knex');

const config = require('../knexfile.js');
const enviorment = process.env.NODE_ENV
module.exports = knex(config[enviorment]);