import { Request, Response, NextFunction } from 'express';
import Chapter from '../entity/Chapter';
import { getManager, getRepository } from 'typeorm';
import logger from '../utils/logger';
import LM_Chapter from 'src/types/Book/chapter';
import ChapterSummary from 'src/entity/ChapterSummary';

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

    await getRepository(Chapter).createQueryBuilder().insert().values(chapter).execute();

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
const updateChapter = async (req: Request<{}, {}, LM_Chapter>, res: Response, _next: NextFunction) => {

    const user = res.locals.user;

    const updatedChapter = req.body;

    const chapter = new Chapter();

    chapter.book_id = updatedChapter.book_id;
    chapter.chapter_id = updatedChapter.chapter_id;
    chapter.user_id = user.user_id;
    chapter.title = updatedChapter.title;
    chapter.toRead = updatedChapter.toRead;
    chapter.read = updatedChapter.read;
    chapter.importance = updatedChapter.importance;
    chapter.summary = updatedChapter.summary;
    chapter.isSubchapter = updatedChapter.isSubchapter;
    chapter.index = updatedChapter.index;
    chapter.parentChapter = updatedChapter.parentChapter ?? "";

    // await getRepository(Chapter).createQueryBuilder().where("chapter_id = :chapter_id", { chapter_id: updatedChapter.chapter_id }).delete().execute();

    // await getRepository(Chapter).createQueryBuilder().insert().values(chapter).execute();

    // TODO Summaries

    // TODO Flashcards

    // TODO Notes

    // TODO Commentaries

    // TODO Glossary

    // TODO Loanword


    await getRepository(Chapter).createQueryBuilder().update(Chapter).set(chapter).where("chapter_id = :chapter_id", { chapter_id: updatedChapter.chapter_id }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();


    res.status(200).json(updatedChapter);
}

const deleteChapter = async (req: Request, res: Response) => {
    const user = res.locals.user;

    const chapterId = req.params.chapterId;

    await getRepository(Chapter).createQueryBuilder().delete().where("chapter_id = :chapter_id", { chapter_id: chapterId }).andWhere("user_id = :user_id", { user_id: user.user_id }).execute();

    res.status(200).json({ msg: "Deleted chapter" });
}

export { saveChapter, updateChapter, getChapter, getChapters, deleteChapter };