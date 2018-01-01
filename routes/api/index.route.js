import express from 'express';

import checkstyleRouter from './checkstyle.route';
import codeAnalysisConfigRouter from './code_analysis_config.route';
import codeAnalysisRouter from './code_analysis.route';
import commitRouter from './commit.route';
import cpdRouter from './cpd.route';
import findbugsRouter from './findbugs.route';
import referenceRouter from './reference.route';
import repositoryRouter from './repository.route';
import technicaldebtRouter from './technicaldebt.route';

const router = express.Router();

router.use('/checkstyle', checkstyleRouter);
router.use('/code_analysis_config', codeAnalysisConfigRouter);
router.use('/code_analysis', codeAnalysisRouter);
router.use('/commit', commitRouter);
router.use('/cpd', cpdRouter);
router.use('/findbugs', findbugsRouter);
router.use('/reference', referenceRouter);
router.use('/repository', repositoryRouter);
router.use('/technicaldebt', technicaldebtRouter);

export default router;
