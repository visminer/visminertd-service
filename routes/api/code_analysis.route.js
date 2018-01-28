import express from 'express';

import CodeAnalysisController from './../../controllers/code_analysis.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: CodeAnalysisController.helloWord() });
});

// GET
router.get(
    '/analysis_history/repository/:repository_id/filehash/:filehash/commit_date/:commit_date',
    CodeAnalysisController.getFileAnalysisHistory);
router.get('/get/commit/:commit/filehash/:filehash', CodeAnalysisController.getByCommitAndFilehash);

export default router;
