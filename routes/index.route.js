import express from 'express';

import apiRouter from './api/index.route';

const router = express.Router();

router.use('/api', apiRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VisMiner Web API' });
});


export default router;
