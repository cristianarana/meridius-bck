import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: true })
    createdBy: string;
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @Column({ nullable: true })
    updatedBy: string;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
  
    @Column({ nullable: true })
    deletedBy: string;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deletedAt: Date | null;
  }