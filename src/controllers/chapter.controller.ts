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
    Object.assign(chapter, req.body);
    const chapterRepository = getManager().getRepository(Chapter);
    await chapterRepository.save(chapter);

    logger.info("Inserted chapter into database")

    return res.status(200).json({ msg: "Chapter inserted into database" })

}

export { saveChapter };