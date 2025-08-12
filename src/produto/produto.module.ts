import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoController } from "./controllers/produto.controller";
import { ProdutoService } from "./services/produto.service";
import { Produto } from "./entities/produto.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService],
    controllers: [ProdutoController],
})
export class ProdutoModule {}