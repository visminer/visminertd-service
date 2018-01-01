import express from 'express';

import CheckStyleController from './../../controllers/checkstyle.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: CheckStyleController.helloWord() });
});

export default router;
