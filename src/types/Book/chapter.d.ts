import LM_Summary from './summary';
import { Descendant } from 'slate';
import { LM_Flashcard } from '../Flashcard/flashcard';
import { LM_Citation } from './citation';
import { LM_EntityStatus } from "../Entity/entity"
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
    index?: string;

    status: LM_EntityStatus;
    /**
     * Importance is a number from 1 to 100 where 1 indicate that it is not important and 100 that it is of outmost importance
     */
    importance: number;
    /**
     * Indicates if the chapter is read.
     */
    summary: string;
    /**
     * IDs of the multiple Flashcard objs
     */
    commentary: string;
    flashcards?: string[]
    /**
     * IDs of the multiple SubChapter objs
     */
    subChapters?: string[];
    /**
     * IDs of the multiple Note objs
     */
    notes: string[];
    /**
     * IDs of the multiple Picture objs
     */
    pictures: string[];
    /**
     * IDs of the keywords that belong to this chapter
     */
    keyWords: string[]
    /**
     * IDs of the LoanWord objs
     */
    loanWords: string[]
    /**
     * IDs of the GlossaryWord objs
     */
    glossaryWords: string[]
    /**
     * Date when the chapter has started to be read
     */
    started: Date | undefined;
    /**
     * Date when the chapter has been read
     */
    ended: Date | undefined;
    createdAt: Date;
    updatedAt: Date;
}
