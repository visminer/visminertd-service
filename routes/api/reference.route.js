import express from 'express';

import ReferenceController from './../../controllers/reference.controller';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: ReferenceController.helloWord() });
});

router.get('/repository/:repository_id', ReferenceController.findByRepository);
router.get('/repository/:repository_id/sorted', ReferenceController.findByRepositorySorted);

export default router;
