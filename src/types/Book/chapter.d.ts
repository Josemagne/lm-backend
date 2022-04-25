import LM_Summary from './summary';
import { Descendant } from 'slate';
import { LM_Flashcard } from '../flashcards/flashcard';
import { LM_Citation } from './citation';
import { ScriptureStatus } from '../common/scripturestatus';
export default interface LM_Chapter {
    chapter_id: string;
    /**
     * The title of the chapter
     */
    title: string;
    /**
     * book_id of the book
     */
    book_id: string;
    /**
     * Decides if the chapter should be read
     */
    toRead: boolean;
    /**
     * Decides if the chapter has been read
     */
    read: boolean;
    status: ScriptureStatus;
    /**
     * Importance is a number from 1 to 100 where 1 indicate that it is not important and 100 that it is of outmost importance
     */
    importance: number;
    /**
     * Indicates if the chapter is read.
     */
    read: boolean;
    summary: string;
    /**
     * Date when the chapter has started to be read
     */
    started: Date | null;
    /**
     * Date when the chapter has been read
     */
    ended: Date | null;
    flashcards?: {
        [id: string]: LM_Flashcard;
    }
    subchapters?: string[];
    /**
     * The index of the chapter
     * E.g. 1.1.1
     */
    index: string;
}

export interface LM_Subchapter extends LM_Chapter {
    isSubchapter: boolean;
}