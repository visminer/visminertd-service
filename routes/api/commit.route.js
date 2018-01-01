import express from 'express';

import CommitController from './../../controllers/commit.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: CommitController.helloWord() });
});

export default router;
