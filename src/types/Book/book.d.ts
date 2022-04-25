import { string } from "yup";
import type LM_Chapter from "./chapter";
import { LM_Book_Contents } from "./contents";
import { Descendant } from 'slate';
import { LM_BookFlashcard } from "./bookflashcard";
import { LM_Collection } from "../collection";
import { ScriptureStatus } from '../common/scripturestatus';
import { LM_EntityID } from "../Entity/entity";

export declare interface LM_Book {
    /**
     * Unique id that identifies the book
     */
    book_id: string | LM_EntityID;

    /**
     * Full name of the author
     */
    author: string;
    book_title: string;
    pages: number;
    /**
     * Decides if the book is finished
     */
    read: boolean;
    /**
     * Status of the book.
     */
    status: ScriptureStatus;
    /**
     * A number between 0 and 100 that indicates how far we have gotten with the book.
     */
    progress: number;
    /**
     * IDs of the chapterCollections that belong to the book
     */
    chapterCollection: string[];
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
    collections: string[];
    notes: string[];
    commentaries: string[];
}
