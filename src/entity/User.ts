import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity("users")
export class User extends BaseEntity {

    @PrimaryColumn()
    user_id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    token: string;
}
