import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Settings {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	colorOne: string;

	@Column()
	colorTwo: string;

	@Column()
	gradientDegree: number;
}
