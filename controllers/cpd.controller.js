import CPDModel from './../models/cpd.model';

exports.getByCommitAndFilehash = (req, res, next) => {
    CPDModel.find({
        commit: req.params.commit,
        'occurrences.filehash': req.params.filehash
    }, {
        'occurrences.source_code_slice': 0
    })
    .lean()
    .then(r => res.json(r))
    .catch(e => next(e));
}
