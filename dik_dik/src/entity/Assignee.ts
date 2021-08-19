import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Assignee {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	photoUrl: string;

	@OneToOne(() => User)
	@JoinColumn()
	user: User;
}
