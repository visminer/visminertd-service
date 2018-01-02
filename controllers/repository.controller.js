import RepositoryModel from './../models/repository.model';

exports.findAll = (req, res, next) => {
    RepositoryModel.find({}, {contributors: 0})
    .then(r => res.json(r))
    .catch(e => next(e));
};
