import mongoose from 'mongoose';

const CodeAnalysisReportSchema = new mongoose.Schema({
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
 * @typedef CodeAnalysisReportModel
 */
export default mongoose.model('CodeAnalysisReportModel', CodeAnalysisReportSchema, 'rm_code_analysis_report');
