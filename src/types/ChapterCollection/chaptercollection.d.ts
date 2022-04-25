import { ScriptureStatus } from '../common/scripturestatus';
export declare interface LM_ChapterCollection {
    chaptercollection_id: string;
    book_id: string | undefined;
    article_id: string | undefined;
    status: ScriptureStatus;
    /**
     * IDs of the chapters that the chaptercollection contains
     */
    chapters: string[]
}