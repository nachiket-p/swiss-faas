"use strict"
const GraphQLJSON = require('graphql-type-json');
const { gql } = require('apollo-server-fastify');

const META = {
    name: 'string',
    description: 'String Utility Functions',
    version: 1,
    configSchema: {
        "required": ["token", "defaultCase"],
        "properties": {
            "token": { "type": "string" },
            "defaultCase": { "type": "string" },
            //   "type": "number",
            //   "minimum": 2
            // }
        }
    }
}

const typeDefs = gql`
  type Mutation {
    toUpperCase(text: String!): String
    toLowerCase(text: String!): String
  }
`;

const resolvers = {
    Query: {
        books: () => books,
    },
    Mutation: {
        toUpperCase: (parent, args, context) => {
            return args.text.toUpperCase()
        },
        toLowerCase: (parent, args) => {
            return args.text.toLowerCase()
        }
    },
    JSON: GraphQLJSON
};

module.exports = {
    META,
    typeDefs,
    resolvers
}
