import { Column, Entity } from "typeorm";
import { BaseEntity } from "./baseEntity";


@Entity()
export class Player extends BaseEntity{
  @Column()
  fullname: string;

  @Column({nullable: true})
  birthDate?: Date;

  @Column({ type: 'float' })
  weight: number;

  @Column({ type: 'float' })
  height: number;

  @Column()
  position: string;

  @Column({nullable: true})
  alternativePosition?: string;

  @Column({nullable: true})
  weakFoot?: string;

  @Column({nullable: true})
  strongFoot?: string;
  
  @Column()
  aditionalInfo: string;
}