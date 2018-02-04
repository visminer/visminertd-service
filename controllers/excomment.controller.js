import ExCommentModel from './../models/excomment.model';

exports.getByCommitAndFilehash = (req, res, next) => {
    ExCommentModel.findOne({
        commit: req.params.commit,
        filehash: req.params.filehash
    }, {
        comments: 1
    })
    .lean()
    .then(r => res.json(r))
    .catch(e => next(e));
}
