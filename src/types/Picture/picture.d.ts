import { LM_EntityName } from "../Entity/entity";

export declare interface LM_Picture {
    picture_id: string;
    /**
     * Title of the picture
     */
    picture_title?: string;
    type: LM_EntityName;
}