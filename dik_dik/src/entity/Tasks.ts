
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Assignee } from './Assignee';
import { Branch } from "./Branch";
import { Label } from './Label';
import { Milestone } from './Milestone';
import { Project } from "./Project";

@Entity()
export class Task {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column("date")
	dueDate: Date;

	@Column()
	difficulty: number;

	@Column()
	aggregatedValue: number;

	@OneToMany(() => Label, label => label.id)
	labels: Label[];

	@OneToMany(() => Assignee, assignee => assignee.id)
	assignees: Assignee[];

	@OneToOne(() => Milestone)
	@JoinColumn()
	milestone: Milestone;

	@OneToOne(() => Project)
	@JoinColumn()
	project: Project;

	@Column()
	status: number;

	@OneToOne(() => Branch)
	@JoinColumn()
	branch: Branch;

	@Column("text")
	description: string;
}
