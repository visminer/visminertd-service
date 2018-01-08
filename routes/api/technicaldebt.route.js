import express from 'express';

import TechnicalDebtController from './../../controllers/technicaldebt.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: TechnicalDebtController.helloWord() });
});

router.get('/commit/:commit', TechnicalDebtController.findByRepository);

export default router;
