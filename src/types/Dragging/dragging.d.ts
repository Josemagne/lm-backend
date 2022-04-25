import LM_Entity from "../Entity/entity";

export declare interface LM_Dragging {
    dragging_id: string;
    droppables: {
        [droppable_title: string]: {
            /**
             * Title of the droppable
             */
            droppable_title: string;
            /**
             * Position of the droppable
             */
            position: number;
        }
    };
    type: LM_Entity
}