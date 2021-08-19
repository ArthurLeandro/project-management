import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Milestone {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	status: number;

	@Column("date")
	dueDate: Date;
}
