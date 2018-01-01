import express from 'express';

import FindBugsController from './../../controllers/findbugs.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: FindBugsController.helloWord() });
});

export default router;
