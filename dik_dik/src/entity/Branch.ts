import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Branch {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	branchName: string;

	@Column()
	status: number;

	@Column()
	templatedName: number;

}
