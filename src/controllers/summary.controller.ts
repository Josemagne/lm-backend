import { Request, Response } from 'express';
import {getRepository} from "typeorm"
import Summary from "../entity/Summary/Summary"
import {LM_Summary} from "../types/summary/summary"

/**
 * Adds a summary
 * @param req 
 * @param res 
 */
const addSummary = async (req: Request, res: Response) => {
  const user = res.locals.user;

  const {summary_id,summary, summaryType, book_id, chapter_id, subchapter_id, bookcollection_id, article_id, articlecollection_id} = req.body as LM_Summary;

  const summaryEntity = new Summary()
  summaryEntity.summary_id = summary_id;
  summaryEntity.summary = summary;
  summaryEntity.summaryType = summaryType;
  summaryEntity.bookcollection_id = bookcollection_id;
  summaryEntity.chapter_id = chapter_id;
  summaryEntity.subchapter_id = subchapter_id;
  summaryEntity.articlecollection_id = articlecollection_id;
  summaryEntity.article_id = article_id;

  await getRepository(Summary).createQueryBuilder().insert().values(summaryEntity).execute();

  res.status(200).json({result: "success"})
}

/**
 * Gets a particular summary
 * @param req 
 * @param res 
 */
const getSummary = async (req: Request, res: Response) => {
  const user = res.locals.user;
  const summaryId = req.params.summaryId;

const summary = getRepository(Summary).createQueryBuilder().where("user_id = :user_id", {user_id: user.user_id}).andWhere("summary_id = :summary_id", {summary_id: summaryId}).execute();

  res.status(200).json(summary);
}

/**
 * Gets multiple summaries
 * @param req 
 * @param res 
 */
const getSummaries = async (req: Request, res: Response) => {
  const user = res.locals.user;
const type = req.params.type;

  const summaries = getRepository(Summary).createQueryBuilder().where("user_id = :user_id", {user_id: user.user_id}).andWhere("summaryType = :summaryType", {summaryType: type}).execute();

    return res.status(200).json(summaries)
}

/**
 * Update a summary
 * @param req 
 * @param res 
 */
const updateSummary = async (req: Request, res: Response) => {
  const user = res.locals.user;
  
  const {summary_id,summary, summaryType, book_id, chapter_id, subchapter_id, bookcollection_id, article_id, articlecollection_id} = req.body as LM_Summary;

  const summaryEntity = new Summary()
  summaryEntity.summary_id = summary_id;
  summaryEntity.summary = summary;
  summaryEntity.summaryType = summaryType;
  summaryEntity.book_id = book_id;
  summaryEntity.bookcollection_id = bookcollection_id;
  summaryEntity.chapter_id = chapter_id;
  summaryEntity.subchapter_id = subchapter_id;
  summaryEntity.articlecollection_id = articlecollection_id;
  summaryEntity.article_id = article_id;

  await getRepository(Summary).createQueryBuilder().update().set(summaryEntity).where("user_id = :user_id", {user_id: user.user_id}).andWhere("summary_id = :summary_id", {summary_id: summary_id}).execute();

}

const deleteSummary = async (req: Request, res: Response) => {
  const user = res.locals.user
  const summary_id = req.params.summaryId;

  await getRepository(Summary).createQueryBuilder().delete().where("summary_id = :summary_id", {summary_id: summary_id}).andWhere("user_id = :user_id", {user_id: user.user_id}).execute();

  return res.status(200).json({result: "sucess"});

}

export { addSummary, updateSummary, getSummaries, getSummary, deleteSummary };
