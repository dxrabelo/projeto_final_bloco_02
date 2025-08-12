import { Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../services/produto.service";
import { Produto } from "../entities/produto.entity";

@Controller('produtos')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) { }

    @Get()
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.produtoService.findById(id);
    }

    @Post()
    create(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.create(produto);
    }

    @Put('/:id')
    update(@Param('id', ParseIntPipe) id: number, 
    @Body() produto: Produto): Promise<Produto> {
        return this.produtoService.update(id, produto);
    }

    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.produtoService.delete(id);
    }

}