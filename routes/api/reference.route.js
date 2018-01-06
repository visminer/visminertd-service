import express from 'express';

import ReferenceController from './../../controllers/reference.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: ReferenceController.helloWord() });
});

router.get('/repository/:repository_id', ReferenceController.findByRepository);

export default router;
