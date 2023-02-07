import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto.service';
import { CadastroComponent } from '../cadastro/cadastro.component'
import { DetalhesComponent } from '../detalhes/detalhes.component';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})

export class InventarioComponent implements OnInit {

  produtos: any[] = [];
  produtoFiltrado: any[] = [];
  public filtrarTituloDescricaoValor: string = '';
  id: string = '';

  constructor(
    public dialog: MatDialog,
    private service: ProdutoService,) {
  }

  ngOnInit(): void {
    this.exibirProdutos();
  }

  cadastrarProduto(): void {
    const dialogRef = this.dialog.open(CadastroComponent, {});
    
    dialogRef.afterClosed().subscribe(result => {
      this.exibirProdutos();
    });
  }

  editarProduto(produto: Produto): void {
    const dialogRef = this.dialog.open(CadastroComponent, {});
    dialogRef.componentInstance.produto = produto

    dialogRef.afterClosed().subscribe(result => {
      this.exibirProdutos();
    });
  }

  mostrarDetalhesProduto(produto: Produto): void {
    const dialogRef = this.dialog.open(DetalhesComponent, {});
    dialogRef.componentInstance.produtos = produto

    dialogRef.afterClosed().subscribe(result => {
      this.exibirProdutos();
    });
  }

  filtrar(valorDigitadoInput: any) {
    let conteudoDigitado = valorDigitadoInput.target.value;

    if (conteudoDigitado) {
      this.filtrarTituloDescricaoValor = conteudoDigitado;
      this.filtro();
    }
    else
      this.exibirProdutos();

    if (conteudoDigitado.length == 0) 
      this.filtrarTituloDescricaoValor = '';
  }

  private filtro() {
    if (this.filtrarTituloDescricaoValor.length < 2) return;
    this.filtrarTituloDescricaoValor = this.filtrarTituloDescricaoValor.toLowerCase();

    this.produtoFiltrado = this.produtos.filter((produto: Produto) => {
      if (!isNaN(Number(this.filtrarTituloDescricaoValor)))
        return produto.price == Number(this.filtrarTituloDescricaoValor);
      else
        return produto.title.toLowerCase().includes(this.filtrarTituloDescricaoValor) || produto.description.toLowerCase().includes(this.filtrarTituloDescricaoValor)
    });
  }

  exibirProdutos() {
    this.service.pegarTodosProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
      this.produtoFiltrado = produtos;
    })
  }

  deletarProduto(id: string) {
    this.service.deletarProduto(id).subscribe(() => {
      this.exibirProdutos();
    })
  }
}