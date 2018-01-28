import express from 'express';

import FindBugsController from './../../controllers/findbugs.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: FindBugsController.helloWord() });
});

// GET
router.get('/get/commit/:commit/filehash/:filehash', FindBugsController.getByCommitAndFilehash);

export default router;
