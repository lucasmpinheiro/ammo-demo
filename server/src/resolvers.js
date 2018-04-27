import Product from './models/Product';

export const resolvers = {
    Query: {
        products: (root, { filter }) => Product.find({
            name: { '$regex': filter, '$options': 'i' },
        }).exec(),
    },
};
