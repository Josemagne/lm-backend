import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity("collection")
export default class Collection extends BaseEntity {
    @PrimaryColumn()
    collection_id: string;

    @Column()
    user_id: string;


}