import express from 'express';

import TechnicalDebtController from './../../controllers/technicaldebt.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: TechnicalDebtController.helloWord() });
});

// GET
router.get('/commit/:commit', TechnicalDebtController.findByRepository);

// PUT
router.put('/confirmdebt', TechnicalDebtController.confirmDebt);
router.put('/removedebt', TechnicalDebtController.removeDebt);
router.put('/confirmall', TechnicalDebtController.confirmAllByReference);

export default router;
