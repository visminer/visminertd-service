import TechnicalDebtReportModel from './../models/technicaldebt_report.model';


exports.listFullReportByRepository = (req, res, next) => {
    TechnicalDebtReportModel.listFullReportByRepository(req.params.repository)
    .then(tdReport => res.json(tdReport))
    .catch(e => next(e));
}

exports.listFullReportByRepoAndRef = (req, res, next) => {
    TechnicalDebtReportModel.listFullReportByRepoAndRef(req.params.repository, req.params.reference)
    .then(tdReport => res.json(tdReport))
    .catch(e => next(e));
}
