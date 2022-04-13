import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("users")
export class User {

    @PrimaryColumn()
    user_id: string;

    @Column()
    username: string;

    @Column()
    password: string;
}
