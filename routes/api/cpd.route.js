import express from 'express';

import CPDController from './../../controllers/cpd.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: CPDController.helloWord() });
});

// GET
router.get('/get/commit/:commit/filehash/:filehash', CPDController.getByCommitAndFilehash);

export default router;
