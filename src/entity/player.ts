import { Column, Entity } from "typeorm";
import { baseEntity } from "./baseEntity";

@Entity()
export class Player extends baseEntity{
    @Column({ name: "name", nullable: true })
    name: string;

    @Column('date', { name: "birthdate" })
    birthdate: Date;

    @Column('float', {name: "weight", nullable: true})
    weight: number;

    @Column('float', {name: "height", nullable: true})
    height: number;

    @Column({name: "email", nullable: true})
    email: string;

    @Column('int', {name: "phone", nullable: true})
    phone: number;
}