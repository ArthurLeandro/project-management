import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	login: string;

	@Column()
	email: string;

	@Column()
	password: number;
}
