import mongoose from 'mongoose';

const FindBugsSchema = new mongoose.Schema({
    reference: String,
    commit: String,
    commit_date: Date,
    repository: mongoose.SchemaTypes.ObjectId,
    filename: String,
    filehash: Number,
    bugs: [{
        rank: Number,
        rank_category: String,
        priority: Number,
        priority_category: String,
        type: String,
        abbreviation: String,
        description: String,
        category: String,
        class: String,
        field: String,
        method: String,
        local_constiable: String,
        short_message: String,
        long_message: String
    }]
});

/**
 * @typedef FindBugsModel
 */
export default mongoose.model('FindBugsModel', FindBugsSchema, 'findbugs_bugs_analysis');
