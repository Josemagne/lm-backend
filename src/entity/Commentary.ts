import { BaseEntity, Column, PrimaryColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
export class Commentary extends BaseEntity {

    @PrimaryColumn()
    commentary_id: string;

    @Column({ nullable: false })
    user_id: string;

    @Column({ nullable: false })
    book_id: string;

    @Column({ nullable: true })
    chapter_id: string;

    @Column({ default: '' })
    data: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}