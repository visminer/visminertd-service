import mongoose from 'mongoose';

const CodeAnalysisSchema = new mongoose.Schema({
    filename: String,
    metrics: [{
        name: String,
        value: Number
    }],
    classes: [{
        name: String,
        type: String,
        metrics: [{
            name: String,
            value: Number
        }],
        codesmells: [String],
        methods: [{
            name: String,
            metrics: [{
                name: String,
                value: Number
            }],
            codesmells: [String]
        }]
    }],
    analysis_report: mongoose.SchemaTypes.ObjectId,
    reference: String,
    commit: String,
    commit_date: Date,
    repository: mongoose.SchemaTypes.ObjectId
});

/**
 * @typedef CodeAnalysisModel
 */
export default mongoose.model('CodeAnalysisModel', CodeAnalysisSchema, 'rm_code_analysis');
