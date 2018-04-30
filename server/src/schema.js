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

    type ProductList {
        totalCount: Int
        edges: [Product!]
    }

    type Query {
        products(filter: String, skip: Int, limit: Int): ProductList
    }
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers });
