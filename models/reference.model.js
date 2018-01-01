import mongoose from 'mongoose';

const ReferenceSchema = new mongoose.Schema({
    repository: mongoose.SchemaTypes.ObjectId,
    name: String,
    path: String,
    type: String,
    commits: [String]
});

/**
 * @typedef ReferenceModel
 */
export default mongoose.model('ReferenceModel', ReferenceSchema, 'rm_reference');
