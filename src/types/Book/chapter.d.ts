import LM_Summary from './summary';
export default interface LM_Chapter {
    chapter_id: string;
    /**
     * The title of the chapter
     */
    title: string;
    /**
     * Decides if the chapter should be read
     */
    toRead: boolean;
    /**
     * Importance is a number from 1 to 100 where 1 indicate that it is not important and 100 that it is of outmost importance
     */
    importance: number;
    summary: LM_Summary;
    /**
     * When the chapter has started
     */
    started: Date;
    /**
     * When the chapter has ended
     */
    ended: Date;
}