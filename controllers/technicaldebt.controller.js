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

exports.payDebt = (req, res, next) => {
    changeDebtValue(req, res, next, 2);    
}

exports.paidDebt = (req, res, next) => {
    changeDebtValue(req, res, next, 3);    
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

exports.getFileDebtHistory = (req, res, next) => {
    const date = new Date(req.params.commit_date);
    TechnicalDebtModel.find({
        repository: mongoose.Types.ObjectId(req.params.repository_id),
        filehash: req.params.filehash,
        commit_date: { $lte: date }
    })
    .sort({ commit_date: -1 })
    .then(r => res.json(r))
    .catch(e => next(e));
}

exports.findByRepositoryAndReference = (req, res, next) => {
    TechnicalDebtModel.find({
        repository: mongoose.Types.ObjectId(req.params.repository_id),
        reference: req.params.reference,
    })
    .then(r => res.json(r))
    .catch(e => next(e));
}

// HELPERS

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
