import { Request, Response, NextFunction } from 'express';
import Chapter from '../entity/Chapter';
import { getManager } from 'typeorm';
import logger from '../utils/logger';

/**
 * Saves the chapter in the backend
 * @param req 
 * @param res 
 * @param next 
 */
const saveChapter = async (req: Request, res: Response, next: NextFunction) => {
    logger.info(req.body)

    const chapter = new Chapter();
    // NOTE Assigns the enumerable props of req.body to chapter!!!
    Object.assign(chapter, req.body);
    const chapterRepository = getManager().getRepository(Chapter);
    await chapterRepository.save(chapter);

    logger.info("Inserted chapter into database")

    return res.status(200).json({ msg: "Chapter inserted into database" })

}

const updateChapter = async (req: Request, res: Response, next: NextFunction) => {

    const chapterId = req.params.chapterId;
    const chapter = new Chapter();
    Object.assign(chapter, req.body);

    const chapterRepository = getManager().getRepository(Chapter);
    await chapterRepository.update(chapter.chapter_id, chapter);

    logger.info("Updated chpater")

    res.status(200).json(req.body);
}

export { saveChapter, updateChapter };