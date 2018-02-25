import express from 'express';

import CodeAnalysisConfigController from './../../controllers/code_analysis_report.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: CodeAnalysisConfigController.helloWord() });
});

router.get('/count-files/repository/:repository_id/commits/:commits', CodeAnalysisConfigController.countFilesByReference);

export default router;
