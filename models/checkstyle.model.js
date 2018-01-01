import mongoose from 'mongoose';

const CheckStyleSchema = new mongoose.Schema({
    reference: String,
    commit: String,
    filehash: Number,
    commit_date: Date,
    repository: mongoose.SchemaTypes.ObjectId,
    filename: String,
    style_problems: [{
        line: Number,
        column: Number,
        message: String,
        severity: String,
        checker: String
    }]
});

/**
 * @typedef CheckStyleModel
 */
export default mongoose.model('CheckStyleModel', CheckStyleSchema, 'checkstyle_audit');
