import Product from './models/Product';

const strToTagRegex = str => new RegExp(str, 'i');

export const resolvers = {
    Query: {
        products: async (root, { filter = '', limit = 25, skip = 0 }) => {
            const conditions = {
                $or: [{
                    name: { '$regex': filter, '$options': 'i' },
                }, {
                    tags: { $all: filter !== '' ? filter.split(' ').map(strToTagRegex) : [] },
                }],
            };

            return {
                totalCount: await Product.find(conditions).count(),
                edges: await Product.find(conditions).skip(skip).limit(limit).exec(),
            };
        },
    },
};
