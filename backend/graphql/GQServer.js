var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const app = express();

const theSchema = buildSchema(`

    type Query {
        test : String
        balance (walletAddress : String!) : String
    }

    type Mutation {
        authorize (message : String!, walletAddress : String!, signature : String!) : Boolean
    }
`);

const rootSchema = require('./resolvers');


app.use('/graphql', graphqlHTTP({
    schema: theSchema,
    rootValue: rootSchema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log('API started listening at 5000');
});
