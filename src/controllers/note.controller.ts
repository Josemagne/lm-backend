import { Response, Request } from "express";
import { getRepository } from "typeorm";
import { Note } from "../entity";

const getNote = async (req: Request, res: Response) => {
  const { entity, entityID, noteID } = req.params;
  const user = res.locals.user;

  const note = await getRepository(Note)
    .createQueryBuilder()
    .where(`entity = ${entity}`)
    .andWhere(`entity_id = ${entityID}`)
    .andWhere("note_id = :note_id", { note_id: noteID })
    .execute();

  return res.status(200).json({ result: "success", note: note });
};

const getNotes = async (req: Request, res: Response) => {
  const user = res.locals.user;

  const notes = await getRepository(Note)
    .createQueryBuilder()
    .where("user_id = :user_id", { user_id: user.user_id })
    .getMany();

  return res.status(200).json({ result: "success", notes: notes });
};

const addNote = async (req: Request, res: Response) => {
  const { user_id } = res.locals.user;

  const {
    note_id,
    note,
    title,
    book_id,
    createdAt,
    updatedAt,
    entity,
    entity_id,
  } = req.body;

  const newNote = new Note();
  newNote.note_id = note_id;
  newNote.user_id = user_id;
  newNote.note = note;
  newNote.title = title;
  newNote.book_id = book_id;
  newNote.createdAt = createdAt;
  newNote.updatedAt = updatedAt;
  newNote.entity = entity;
  newNote.entity_id = entity_id;
  await getRepository(Note)
    .createQueryBuilder()
    .insert()
    .values(newNote)
    .execute();

  return res.status(200).json({ result: "success" });
};

const updateNote = async (req: Request, res: Response) => {
  const user = res.locals.user;

  const { note_id, note, title, book_id, createdAt, updatedAt } = req.body;

  const newNote = new Note();
  newNote.note_id = note_id;
  newNote.note = note;
  newNote.title = title;
  newNote.book_id = book_id;
  newNote.createdAt = createdAt;
  newNote.updatedAt = updatedAt;

  await getRepository(Note)
    .createQueryBuilder()
    .update()
    .set(newNote)
    .where(`note_id = ${note_id}`)
    .andWhere(`user_id = ${user.user_id}`)
    .execute();

  return res.status(200).json({ result: "success" });
};

const deleteNote = async (req: Request, res: Response) => {
  const user = res.locals.user;
  const noteId = req.params.noteId;

  await getRepository(Note)
    .createQueryBuilder()
    .delete()
    .where(`user_id = ${user.user_id}`)
    .andWhere(`note_id = ${noteId}`)
    .execute();

  return res.status(200).json({ result: "success" });
};

export { getNote, getNotes, addNote, updateNote, deleteNote };
