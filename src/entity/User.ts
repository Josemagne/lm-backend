import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    user_id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
