export declare interface LM_Subject {
    subject_id: string;
    /**
     * The entities that belong to this subject
     */
    entities: {
        /**
         * The LM_EntityName
         */
        [entity_type: string]: string[]
    }
}