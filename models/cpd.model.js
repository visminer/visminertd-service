import mongoose from 'mongoose';

const CPDSchema = new mongoose.Schema({ 
    reference: String, 
    commit: String, 
    commit_date: Date,
    repository: mongoose.SchemaTypes.ObjectId,
    tokens_threshold: Number, 
    token_count: Number, 
    language: String, 
    occurrences: [{
        filename: String, 
        filehash: Number, 
        begin_line: Number, 
        line_count: Number, 
        duplication_percentage: Number, 
        source_code_slice: String
    }]
});

/**
 * @typedef CPDModel
 */
export default mongoose.model('CPDModel', CPDSchema, 'pmd_cpd_analysis');
