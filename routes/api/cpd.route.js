import express from 'express';

import CPDController from './../../controllers/cpd.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: CPDController.helloWord() });
});

export default router;
