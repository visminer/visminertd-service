import mongoose from 'mongoose';

const CodeAnalysisConfigSchema = new mongoose.Schema({
    reference: String,
    commit: String,
    commit_date: Date,
    analysis_date: Date,
    repository: mongoose.SchemaTypes.ObjectId,
    parsers: [String],
    metrics: [String],
    codesmells: [{
        codesmell: String,
        thresholds: mongoose.SchemaTypes.Mixed
    }]
});

/**
 * @typedef CodeAnalysisConfigModel
 */
export default mongoose.model('CodeAnalysisConfigModel', CodeAnalysisConfigSchema, 'rm_code_analysis_config');
