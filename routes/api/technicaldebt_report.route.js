import express from 'express';

import TechnicalDebtReportController from './../../controllers/technicaldebt_report.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: TechnicalDebtReportController.helloWord() });
});

router.get('/repository/:repository', TechnicalDebtReportController.listFullReportByRepository);

export default router;
