import { Request, Response, NextFunction } from 'express';
import Chapter from '../entity/Chapter';
import { getManager, getRepository } from 'typeorm';
import logger from '../utils/logger';

/**
 * Saves the chapter in the backend
 * @param req 
 * @param res 
 * @param _next 
 */
const saveChapter = async (req: Request, res: Response, _next: NextFunction) => {

    const user = res.locals.user;

    const chapter = new Chapter();
    // NOTE Assigns the enumerable props of req.body to chapter!!!
    Object.assign(chapter, req.body);

    chapter.user_id = user.user_id;

    await getRepository(Chapter).createQueryBuilder().insert().into(Chapter).values(chapter).execute();

    return res.status(200).json(chapter);

}

/**
 * Gets all the chapters of a book
 * @param req 
 * @param res 
 * @param _next 
 * @returns 
 */
const getChapters = async (req: Request, res: Response, _next: NextFunction) => {
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
const getChapter = async (req: Request, res: Response, _next: NextFunction) => {
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
const updateChapter = async (req: Request<{}, {}, Chapter>, res: Response, _next: NextFunction) => {

    const user = res.locals.user;

    const updatedChapter = req.body;

    await getRepository(Chapter).createQueryBuilder().update(Chapter).set(updatedChapter).where("chapter_id = :chapter_id", { chapter_id: updatedChapter.chapter_id }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();

    res.status(200).json(updatedChapter);
}

const deleteChapter = async (req: Request, res: Response) => {
    const user = res.locals.user;

    const chapterId = req.params.chapterId;

    await getRepository(Chapter).createQueryBuilder().delete().where("chapter_id = :chapter_id", { chapter_id: chapterId }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();

    res.status(200).json({ msg: "Deleted chapter" });
}

export { saveChapter, updateChapter, getChapter, getChapters, deleteChapter };