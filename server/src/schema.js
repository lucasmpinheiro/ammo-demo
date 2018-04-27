import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Product {
        id: ID!
        name: String
        price: Float
        discountedPrice: Float
        tags: [String]
        photos: [String]
    }

    type Query {
        products(filter: String!): [Product]
    }
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers });
