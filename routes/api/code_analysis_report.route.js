import express from 'express';

import CodeAnalysisConfigController from './../../controllers/code_analysis_report.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: CodeAnalysisConfigController.helloWord() });
});

export default router;
