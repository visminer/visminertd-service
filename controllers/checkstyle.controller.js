import CheckStyleModel from './../models/checkstyle.model';

exports.getByCommitAndFilehash = (req, res, next) => {
    CheckStyleModel.findOne({
        commit: req.params.commit,
        filehash: req.params.filehash
    }, {
        style_problems: 1
    })
    .lean()
    .then(r => res.json(r))
    .catch(e => next(e));
}
