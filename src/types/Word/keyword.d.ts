import { LM_EntityName } from "../Entity/entity";

export type LM_WordType = "GLOSSARY" | "LOANWORD" | "KEYWORD";

export declare interface LM_Keyword {
    keyword_id: string;
    keyWordtype: LM_WordType;
    /**
     * Type of the entity that owns this word
     */
    entityType: LM_EntityName;
}