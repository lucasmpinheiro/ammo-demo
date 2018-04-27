/**
 * Module for connecting to the Mongo Database.
 *
 * @module
 * @type Object
 * @requires mongoose
 * @requires death
 *
 * @author lucas.pinheiro
 */

// Load MongoDB Node.js Driver.
import mongoose from 'mongoose';

// Load other dependencies.
import ON_DEATH from 'death';

const DB_NAME = 'ammo';
const DB_HOST = 'mongodb://localhost';

// Setup mongoose Promises library.
mongoose.Promise = global.Promise;

/**
 * Database connection.
 * @instance
 */
const db = mongoose.createConnection(`${DB_HOST}/${DB_NAME}`, {
    promiseLibrary: global.Promise,
    keepAlive: 120,
});

// If the Node process ends, close the Mongoose connections.
ON_DEATH(() => {
    db.close(() => process.exit(0));
});

function lastModifiedOnPlugin(schema, options) {
    schema.add({ lastModifiedOn: Date });

    schema.pre('save', function(next) {
        this.lastModifiedOn = new Date();
        next();
    });

    if (options && options.index) {
        schema.path('lastModifiedOn').index(options.index);
    }
}

function createdOnPlugin(schema, options) {
    schema.add({ createdOn: Date });

    schema.pre('save', function(next) {
        if (this.isNew) this.createdOn = new Date();
        next();
    });

    if (options && options.index) {
        schema.path('createdOn').index(options.index);
    }
}

mongoose.plugin(lastModifiedOnPlugin);
mongoose.plugin(createdOnPlugin);

// Export the connection.
export default db;
