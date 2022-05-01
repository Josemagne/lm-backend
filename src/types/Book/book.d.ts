import { string } from "yup";
import type LM_Chapter from "./chapter";
import { LM_Book_Contents } from "./contents";
import { LM_BookFlashcard } from "./bookflashcard";
import { LM_Collection } from "../collection";
import { ScriptureStatus } from '../common/scripturestatus';
import { LM_EntityID, LM_EntityStatus } from "../Entity/entity";

export declare interface LM_Book {
    /**
     * Unique id that identifies the book
     */
    book_id: string | LM_EntityID;
    author_id: string;
    author_prename: string;
    author_name: string;
    book_title: string;
    pages?: number;
    /**
     * Decides if the book is finished
     */
    genre: string;
    /**
     * Status of the book.
     */
    status: LM_EntityStatus;
    /**
     * A number between 0 and 100 that indicates how far we have gotten with the book.
     */
    progress: number;
    /**
     * IDs of the chapters that belong to the book
     */
    chapters: string[];
    /**
     * The summary for the entire book
     */
    summary: string;
    /**
     * Number between 1 and 5 for stars.
     */
    rate: number;
    /**
     * Array of flashcard IDs that belong to the book specifically
     */
    flashcards: string[];
    /**
     * The collections IDs the book belongs to
     */
    bookCollection: string[];
    notes: string[];
    commentary: string;
    keyWords: string[];
    glossaryWords: string[];
    loanWords: string[];
}
