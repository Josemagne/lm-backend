import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';


@Entity("citations")
export class Citation extends BaseEntity {
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
    data: string;
}
