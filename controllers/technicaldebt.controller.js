import mongoose from 'mongoose'

import TechnicalDebtModel from './../models/technicaldebt.model';
import TechnicalDebtReportModel from './../models/technicaldebt_report.model';

exports.findByRepository = (req, res, next) => {
    TechnicalDebtReportModel.findOne(
        { commit: req.params.commit },
        { _id: 1 }
    )
    .then(reportResult => {
        TechnicalDebtModel.find(
            { analysis_report: reportResult._id }
        )
        .then(r => res.json(r))
        .catch(e => next(e));
    })
    .catch(e => next(e));
}
