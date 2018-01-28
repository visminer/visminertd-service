import FindBugsModel from './../models/findbugs.model';

exports.getByCommitAndFilehash = (req, res, next) => {
    FindBugsModel.findOne({
        commit: req.params.commit,
        filehash: req.params.filehash
    }, {
        bugs: 1
    })
    .lean()
    .then(r => res.json(r))
    .catch(e => next(e));
}
