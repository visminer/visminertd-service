import express from 'express';

import CodeAnalysisController from './../../controllers/code_analysis.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: CodeAnalysisController.helloWord() });
});

export default router;
