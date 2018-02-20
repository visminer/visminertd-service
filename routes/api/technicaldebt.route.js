import express from 'express';

import TechnicalDebtController from './../../controllers/technicaldebt.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: TechnicalDebtController.helloWord() });
});

// GET
router.get('/commit/:commit', TechnicalDebtController.findByCommit);
router.get('/commit/:commit/indicators/:indicators/checked/:checked/intentional/:intentional/filename/:filename', TechnicalDebtController.findByCommit);
router.get('/debt_history/repository/:repository_id/filehash/:filehash/commit_date/:commit_date', TechnicalDebtController.getFileDebtHistory);
router.get('/repository/:repository_id/reference/:reference', TechnicalDebtController.findByRepositoryAndReference);

// PUT
router.put('/confirmdebt', TechnicalDebtController.confirmDebt);
router.put('/removedebt', TechnicalDebtController.removeDebt);
router.put('/confirmall', TechnicalDebtController.confirmAllByReference);
router.put('/paydebt', TechnicalDebtController.payDebt);
router.put('/paiddebt', TechnicalDebtController.paidDebt);
router.put('/update', TechnicalDebtController.update);

export default router;
