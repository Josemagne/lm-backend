import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';


@Entity("citations")
export default class Citation extends BaseEntity {
    @PrimaryColumn()
    citation_id: string;

    @Column()
    user_id: string;

    @Column()
    book_id: string;

    @Column({
        nullable: true
    })
    chapter_id: string;

    @Column({
        default: '',
        nullable: false
    })
    citation: string;
}
