import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import {Book, User} from "."

@Entity("chapter")
export default class Chapter extends BaseEntity {

    @PrimaryColumn()
    chapter_id: string;

    @Column()
    user_id: string;

    // NOTE Foreign Key (fk)
    @Column({
        nullable: false
    })
    book_id: string;

    @Column(
        {
            nullable: false
        }
    )
    title: string;

    @Column({
        type: "numeric",
        nullable: true
    })
    importance: number;

    @Column()
    status: string;

    @Column(
    )
    summary: string;

    @Column({
        nullable: true,
      type: "varchar"
    })
    index: string;

    @CreateDateColumn(
        {
            nullable: true
        }
    )
    started: Date | null;

    @UpdateDateColumn({
        nullable: true
    })
    ended: Date | null;

  @ManyToOne(() => User, user => user.chapters, {
    cascade: ['insert', 'update']
  })
    user: User;

    @ManyToOne(() =>Book, (book) => book.chapters, {
        cascade: ['insert', 'update']
    })
    book: Book;


}
