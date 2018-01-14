import CodeAnalysisReportModel from './../models/code_analysis_report.model';

exports.countFilesByReference = (req, res, next) => {
    CodeAnalysisReportModel.countFilesByReference(req.params.repository_id)
    .then(r => res.json(r))
    .catch(e => next(e));
}
