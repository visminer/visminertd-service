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


CodeAnalysisReportSchema.statics = {

  countFilesByReference(repository_id, commits) {
    return this.aggregate(
      [
        {
          $match: {
            repository: mongoose.Types.ObjectId(repository_id),
            commit: { $in: commits }
          }
        },
        {
          $lookup:
            {
              from: "rm_code_analysis",
              localField: "_id",
              foreignField: "analysis_report",
              as: "code_analysis"
            }
        },
        {
          $unwind: "$code_analysis"
        },
        {
          $group: {
            _id: "$reference",
            totalFiles: { "$sum": 1 },
          }
        },
      ]
    )
      .exec();
  },
} 

/**
 * @typedef CodeAnalysisReportModel
 */
export default mongoose.model('CodeAnalysisReportModel', CodeAnalysisReportSchema, 'rm_code_analysis_report');
