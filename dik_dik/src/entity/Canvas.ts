
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Project } from "./Project";
import { Task } from "./Tasks";

@Entity()
export class Canvas {

	@PrimaryGeneratedColumn()
	id: number;

	@OneToOne(() => Project)
	@JoinColumn()
	project: Project;

	@OneToMany(() => Task, task => task.id)
	tasks: Task[];
}
