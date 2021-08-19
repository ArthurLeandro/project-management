import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Assignee } from "./Assignee";
import { Board } from "./Board";
import { Label } from "./Label";
import { Task } from "./Tasks";

@Entity()
export class Project {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column("date")
	dueDate: Date;

	@Column()
	password: number;

	@OneToMany(() => Assignee, assignee => assignee.id)
	assignees: Assignee[];

	@OneToMany(() => Task, task => task.id)
	tasks: Task[];

	@OneToOne(() => Board)
	@JoinColumn()
	profile: Board;

	@Column("text")
	description: string;

	@OneToMany(() => Label, label => label.id)
	labels: Label[];
}

