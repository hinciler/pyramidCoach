const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

//dotenv
require('dotenv').config()

// db
const db = require('./helpers/db.js')();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5000, ()=>{console.log('server is running')})
