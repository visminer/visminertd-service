import mongoose from 'mongoose';

const CommitSchema = new mongoose.Schema({
    hash: String,
    author: {
        name: String,
        email: String
    },
    committer: {
        name: String,
        email: String
    },
    message: String,
    changes: [{
        new_path: String,
        old_path: String,
        lines_added: Number,
        lines_removed: Number,
        type: String
    }],
    parents: [String],
    author_date: Date,
    committer_date: Date,
    merge: Boolean,
    repository: mongoose.SchemaTypes.ObjectId
});

/**
 * @typedef CommitModel
 */
export default mongoose.model('CommitModel', CommitSchema, 'rm_commit');
