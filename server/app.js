const express = require('express');
const graphqlHTTP = require('express-graphql'); 
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://pogs:pogs123@ds131601.mlab.com:31601/gql-pogs');
mongoose.connection.once('open', () => {
    console.log('Connected to the database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for request on port 4000');
})