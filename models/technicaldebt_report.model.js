import mongoose from 'mongoose';

const TechnicalDebtReportSchema = new mongoose.Schema({
    reference: String,
    commit: String,
    commit_date: Date,
    analysis_date: Date,
    repository: mongoose.SchemaTypes.ObjectId,
    indicators: [String],
    types: [String]
});

/**
 * @typedef TechnicalDebtReportModel
 */
export default mongoose.model('TechnicalDebtReportModel', TechnicalDebtReportSchema, 'rm_technical_debt_report');
