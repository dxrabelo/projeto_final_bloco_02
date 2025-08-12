import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ) { }

    async findAll(): Promise<Categoria[]> {
        return this.categoriaRepository.find();
    }

    async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({ where: {id} });
        
        if(!categoria) {
            throw new NotFoundException(`Categoria com id ${id} não encontrada`);
        }
        
        return categoria;
    }

    async findByNome(nome: string): Promise<Categoria[]> {
        return this.categoriaRepository.find({ where: { nome: ILike(`%${nome}%`) },
    });
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria): Promise<Categoria> {
        return this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<void> {
        await this.categoriaRepository.delete(id);
    }
}
