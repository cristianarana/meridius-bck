import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class baseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
  
    @DeleteDateColumn({ name: "deleted_at", nullable: true })
    deletedAt?: Date;
  
    @Column({ name: "created_by", nullable: true })
    createdBy?: string;
  
    @Column({ name: "updated_by", nullable: true })
    updatedBy?: string;
  
    @Column({ name: "deleted_by", nullable: true })
    deletedBy?: string;


}