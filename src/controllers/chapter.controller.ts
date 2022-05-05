import { Request, Response, NextFunction } from 'express';
import Chapter from '../entity/Chapter';
import { getManager, getRepository } from 'typeorm';
import logger from '../utils/logger';
import LM_Chapter from 'src/types/Book/chapter';

/**
 * Saves the chapter in the backend
 * @param req 
 * @param res 
 * @param _next 
 */
const saveChapter = async (req: Request, res: Response, ) => {

    const user = res.locals.user;

    const chapter = new Chapter();

    const {chapter_id, title, book_id, status, importance, summary  , index} = req.body;

    chapter.chapter_id = chapter_id;
    chapter.title = title;
    chapter.book_id = book_id;
    chapter.status = status;
    chapter.importance = importance;
    chapter.summary  =summary;
    chapter.index = index;
    chapter.user_id = user.user_id;

    await getRepository(Chapter).createQueryBuilder().insert().values(chapter).execute();
  
    return res.status(200).json({result: "success"});

}

/**
 * Gets all the chapters of a book
 * @param req 
 * @param res 
 * @param _next 
 * @returns 
 */
const getChapters = async (req: Request, res: Response, ) => {
    const user = res.locals.user;
    const bookId = req.params.bookId;

    let chapters: Chapter[] = []

    try {
        chapters = await getRepository(Chapter).createQueryBuilder().where("book_id = :book_id", { book_id: bookId }).andWhere("user_id = :user_id", { user_id: user.user_id }).getMany();
    }

    catch (err) {
        logger.info(`Could not get chapters from book ${bookId}. Here the error:`);
        logger.error(err)
    }

    res.status(200).json({ chapters: chapters })
}

/**
 * Get a particular chapter
 * @param req 
 * @param res 
 * @param _next 
 */
const getChapter = async (req: Request, res: Response, ) => {
    const user = res.locals.user;

    const chapterId = req.params.chapterId;

    const chapter = await getRepository(Chapter).createQueryBuilder().where("chapter_id = :chapter_id", { chapter_id: chapterId }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();

    res.status(200).json(chapter);
}

/**
 * Updates the chapter
 * @param req 
 * @param res 
 * @param _next 
 */
const updateChapter = async (req: Request, res: Response, _next: NextFunction) => {

    const user = res.locals.user;

    const {chapter_id, title, book_id, status, importance, summary  , index} = req.body;

    const chapter = new Chapter();

    chapter.chapter_id = chapter_id;
    chapter.title = title;
    chapter.book_id = book_id;
    chapter.status = status;
    chapter.importance = importance;
    chapter.summary  =summary;
    chapter.index = index;
    chapter.user_id = user.user_id;

    await getRepository(Chapter).createQueryBuilder().update(Chapter).set(chapter).where("chapter_id = :chapter_id", { chapter_id: chapter_id }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();

    res.status(200).json({result: "success"});
}

const deleteChapter = async (req: Request, res: Response) => {
    const user = res.locals.user;

    const chapterId = req.params.chapterId;

    await getRepository(Chapter).createQueryBuilder().delete().where("chapter_id = :chapter_id", { chapter_id: chapterId }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();

    res.status(200).json({ msg: "Deleted chapter" });
}

export { saveChapter, updateChapter, getChapter, getChapters, deleteChapter };
