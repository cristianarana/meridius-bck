import { Column, Entity } from "typeorm";
import { BaseEntity } from "./baseEntity";


@Entity()
export class Player extends BaseEntity{
  @Column()
  fullname: string;

  @Column()
  birthDate: Date;

  @Column({ type: 'float' })
  weight: number;

  @Column({ type: 'float' })
  height: number;

  @Column()
  position: string;

  @Column()
  alternativePosition: string;

  @Column()
  weakFoot: string;
  
  @Column()
  aditionalInfo: string;
}