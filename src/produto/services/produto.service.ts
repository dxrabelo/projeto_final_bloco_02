import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
    ) { }

    async findAll(): Promise<Produto[]> {
  return this.produtoRepository.find({
    relations: ['categoria'] 
  });
}

    async findById(id: number): Promise<Produto> {
        const produto = await this.produtoRepository.findOne({ where: { id } });

        if (!produto) throw new NotFoundException(`Produto com ID ${id} não encontrado`);

        return produto;
    }

    async findByNome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where: { nome: ILike(`%${nome}%`) }
        });
    }

    async create(produto: Produto): Promise<Produto> {
        return await this.produtoRepository.save(produto);
    }

    async update(id: number, produto: Produto): Promise<Produto> {
        await this.findById(id);
        produto.id = id;
        return await this.produtoRepository.save(produto);
    }

    async delete(id: number): Promise<void> {
        await this.produtoRepository.delete(id);
    }

}