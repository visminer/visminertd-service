import express from 'express';

import checkstyleRouter from './checkstyle.route';
import codeAnalysisReportRouter from './code_analysis_report.route';
import codeAnalysisRouter from './code_analysis.route';
import commitRouter from './commit.route';
import cpdRouter from './cpd.route';
import findbugsRouter from './findbugs.route';
import referenceRouter from './reference.route';
import repositoryRouter from './repository.route';
import technicalDebtRouter from './technicaldebt.route';
import technicalDebtReportRouter from './technicaldebt_report.route';
import excommentRouter from './excomment.route';

const router = express.Router();

router.use('/checkstyle', checkstyleRouter);
router.use('/code_analysis_report', codeAnalysisReportRouter);
router.use('/code_analysis', codeAnalysisRouter);
router.use('/commit', commitRouter);
router.use('/cpd', cpdRouter);
router.use('/findbugs', findbugsRouter);
router.use('/reference', referenceRouter);
router.use('/repository', repositoryRouter);
router.use('/technicaldebt', technicalDebtRouter);
router.use('/technicaldebt_report', technicalDebtReportRouter);
router.use('/excomment', excommentRouter);

export default router;
