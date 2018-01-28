import mongoose from 'mongoose';

import CodeAnalysisModel from './../models/code_analysis.model';

exports.getFileAnalysisHistory = (req, res, next) => {
    const date = new Date(req.params.commit_date);
    CodeAnalysisModel.find({
        repository: mongoose.Types.ObjectId(req.params.repository_id),
        filehash: req.params.filehash,
        commit_date: { $lte: date }
    })
    .sort({ commit_date: 1 })
    .select({ 'classes.methods': 0 })
    .lean()
    .then(r => res.json(r))
    .catch(e => next(e));
}

exports.getByCommitAndFilehash = (req, res, next) => {
    CodeAnalysisModel.findOne({
        commit: req.params.commit,
        filehash: req.params.filehash
    }, {
        classes: 1
    })
    .lean()
    .then(r => res.json(r))
    .catch(e => next(e));
}
