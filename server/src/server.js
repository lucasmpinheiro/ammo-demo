require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { schema } from './schema';

const { PORT } = process.env;

const app = express();

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // eslint-disable-line
