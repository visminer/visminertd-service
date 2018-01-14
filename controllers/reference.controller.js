import mongoose from 'mongoose';

import ReferenceModel from './../models/reference.model';

exports.findByRepository = (req, res, next) => {
    ReferenceModel.find(
        { repository: mongoose.Types.ObjectId(req.params.repository_id) },
    )
    .then(r => res.json(r))
    .catch(e => next(e));
}

exports.findByRepositorySorted = (req, res, next) => {
    ReferenceModel.findByRepositorySorted(req.params.repository_id)
    .then(r => res.json(r))
    .catch(e => next(e));
}
