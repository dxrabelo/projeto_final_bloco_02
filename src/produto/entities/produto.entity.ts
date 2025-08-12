import { IsNotEmpty, IsNumber, IsPositive, Max, MaxLength } from "class-validator";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: 'tb_produtos' })
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100, nullable: false })
    nome: string;

    @IsNumber()
    @IsPositive()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    preco: number;

    @MaxLength(255)
    @Column({ length: 255, nullable: true })
    descricao: string;
}
