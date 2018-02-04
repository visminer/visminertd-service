import mongoose from 'mongoose';

const ExCommentSchema = new mongoose.Schema({
    reference: String,
    commit: String,
    commit_date: Date,
    repository: mongoose.SchemaTypes.ObjectId,
    filename: String,
    filehash: Number,
    comments: [{
        id: Number,
        total_pattern: Number,
        total_heuristic: Number,
        total_score: Number,
        comment: String,
        class: String,
        method: String,
        patterns: [{
            name: String,
            score: Number,
            class: String,
            theme: String,
            tdtype: String
        }],
        heuristics: [{
            description: String,
            status: Number,
            score: Number
        }]
    }]
});

/**
 * @typedef ExCommentModel
 */
export default mongoose.model('ExCommentModel', ExCommentSchema, 'excomment_comments_analysis');
