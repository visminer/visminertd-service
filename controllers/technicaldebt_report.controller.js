import TechnicalDebtReportModel from './../models/technicaldebt_report.model';


exports.listFullReportByRepository = (req, res, next) => {
    TechnicalDebtReportModel.listFullReportByRepository(req.params.repository)
    .then(tdReport => res.json(tdReport))
    .catch(e => next(e));

}
