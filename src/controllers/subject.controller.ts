import {Request, Response} from "express"
import {Subject} from "../entity"
import {nanoid} from "nanoid"
import {getRepository} from "typeorm"

export const addSubject = async (req: Request, res: Response) => {
  const user_id = res.locals.user.user_id;

  const {title } = req.body;

  const subject = new Subject()
  subject.user_id = user_id;
  subject.subject_id = nanoid();
  subject.title = title;

  const createdSubject = await getRepository(Subject).createQueryBuilder().insert().values(subject).execute();

  return res.status(201).json({...createdSubject})

}

export const getSubject = async (req: Request, res: Response) => {
  const user_id = res.locals.user.user_id;
  const subjectId = req.params.subjectId;

  const requestSubject = await getRepository(Subject).createQueryBuilder().where(`subject_id = ${subjectId}`).andWhere(`user_id = ${user_id}`).getOne();

  return res.status(200).json({subject: requestSubject, result: "success"})
}

export const getSubjects = async (req: Request, res: Response) => {
  const user_id = res.locals.user.user_id;

  const subjects = await getRepository(Subject).createQueryBuilder().where(`user_id = ${user_id}`).getMany();

  return res.status(200).json({subjects: subjects, result: "success"})
}

export const updateSubject = async (req: Request, res: Response) => {
  const user_id = res.locals.user.user_id;
  const subjectId = req.params.subjectId;

  const {title} = req.body;

  const subject = new Subject()
  subject.title = title;

  const updatedSubject = await getRepository(Subject).createQueryBuilder().update().where(`user_id = ${user_id}`).andWhere(`subject_id = ${subjectId}`).execute();

  return res.status(204).json({...updatedSubject})
}

export const deleteSubject = async (req: Request, res: Response) => {
  const user_id = res.locals.user.user_id;
  const subjectId = req.params.subjectId;

  await getRepository(Subject).createQueryBuilder().delete().where(`user_id = ${user_id}`).andWhere(`subject_id = ${subjectId}`).execute();

  return res.status(200).json({result: "success"});

}

