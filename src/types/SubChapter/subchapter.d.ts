import { LM_EntityStatus } from "../Entity/entity"

export declare interface LM_SubChapter {
    subchapter_id: string;
    /**
     * ID of the parent chapter
     */
    chapter_id: string;
    book_id: string;
    status: LM_EntityStatus;
    createdAt: Date;
    updatedAt: Date;
}
