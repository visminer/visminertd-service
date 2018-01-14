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

exports.update = (req, res, next) => {
    TechnicalDebtModel.findByIdAndUpdate(req.body._id, req.body)
    .then(r => res.json({ success: true }))
    .catch(e => next(e));
}

exports.confirmDebt = (req, res, next) => {
    changeDebtValue(req, res, next, 1);    
}

exports.removeDebt = (req, res, next) => {
    changeDebtValue(req, res, next, -1);    
}

exports.confirmAllByReference = (req, res, next) => {
    TechnicalDebtReportModel.findOne(
        { commit: req.body.commit },
        { _id: 1 }
    )
    .then(reportResult => {
        TechnicalDebtModel.find({ analysis_report: reportResult._id })
        .then(docs => {
            docs.forEach(doc => {
                doc.debts.forEach(debt => {
                    debt.value = 1;
                });
                doc.save()
            });
            res.json({status: 'OK'});
        })
        .catch(e => next(e))
    })
    .catch(e => next(e));
}

var changeDebtValue = (req, res, next, value) => {
    TechnicalDebtModel.findById(mongoose.Types.ObjectId(req.body._id))
    .then(file => {
        file.debts.forEach(debt => {
            if (debt.name === req.body.debt) {
                debt.value = value;
                return;
            }
        });
        file.save((err, updateRes) => {
            if (err) next(err);
            else res.json(updateRes);
        });
    })
    .catch(e => next(e));
}
