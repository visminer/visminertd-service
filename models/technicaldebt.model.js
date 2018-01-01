import mongoose from 'mongoose';

const TechnicalDebtSchema = new mongoose.Schema({
    reference: String,
    commit: String,
    commit_date: Date,
    repository: mongoose.SchemaTypes.ObjectId,
    filename: String,
    filehash: Number,
    indicators: [{
        name: String,
        occurrences: Number
    }],
    debts: [{
        name: String,
        value: Number
    }]
});

/**
 * @typedef TechnicalDebtModel
 */
export default mongoose.model('TechnicalDebtModel', TechnicalDebtSchema, 'rm_technical_debt');
