import Product from './models/Product';

export const resolvers = {
    Query: {
        products: async (root, { filter = '', limit = 25, skip = 0 }) => {
            const conditions = {
                name: { '$regex': filter, '$options': 'i' },
            };

            return {
                totalCount: await Product.find(conditions).count(),
                edges: await Product.find(conditions).skip(skip).limit(limit).exec(),
            };
        },
    },
};
