import { LM_Book } from "../Book/book";
import LM_Chapter from '../Book/chapter';
import { LM_ChapterCollection } from "../ChapterCollection/chaptercollection";

type LM_EntityName = "BOOKCOLLECTION" | "BOOK" | "CHAPTER" | "SUBCHAPTER" | "ARTICLE" | "ARTICLECOLLECTION";

type LM_EntityID = "bookcollection_id" | "book_id" | "chaptercollection_id" | "chapter_id";

type LM_Entity = LM_Book & LM_Chapter & LM_ChapterCollection;

type LM_EntityStatus = "TO_READ" | "READING" | "READ" | "SUMMARIZED" | "FLASHCARD_FINISHED";

export { LM_EntityName, LM_Entity, LM_EntityID, LM_EntityStatus };