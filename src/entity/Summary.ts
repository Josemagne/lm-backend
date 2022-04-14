import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity("summaries")
export class Summary extends BaseEntity {

    @PrimaryColumn()
    summary_id: string

    @Column()
    chapter_id: string | null;

    @Column()
    data: string;
}