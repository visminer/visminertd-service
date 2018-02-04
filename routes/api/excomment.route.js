import express from 'express';

import ExCommentController from './../../controllers/excomment.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: ExCommentController.helloWord() });
});

// GET
router.get('/get/commit/:commit/filehash/:filehash', ExCommentController.getByCommitAndFilehash);

export default router;
