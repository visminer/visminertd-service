import mongoose from 'mongoose';

const RepositorySchema = new mongoose.Schema({
    key: String,
    name: String,
    path: String,
    scm: String,
    description: String,
    contributors: {
        name: String,
        email: String
    }
});

/**
 * @typedef RepositoryModel
 */
export default mongoose.model('RepositoryModel', RepositorySchema, 'rm_repository');
