import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Publicacao } from '../models/publicacao.model';
import { PublicacaoService } from '../services/publicacao.service';
import { CadastroComponent } from '../cadastro/cadastro.component'
import { DetalhadaComponent } from '../detalhada/detalhada.component';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {

  publicacoes: any[] = [];
  publicacoesFiltrado: any[] = [];
  public buscarNome: string = '';
  id: string = '';

  constructor(
    public dialog: MatDialog,
    private service: PublicacaoService,) {
  }

  ngOnInit(): void {
    this.exibirTodasPublicacoes();
  }

  cadastrarProduto(): void {
    const dialogRef = this.dialog.open(CadastroComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      this.exibirTodasPublicacoes();
    });
  }

  editarPublicacao(id: string): void {
    const dialogRef = this.dialog.open(CadastroComponent, {});
    dialogRef.componentInstance.id = id;

    dialogRef.afterClosed().subscribe(result => {
      this.exibirTodasPublicacoes();
    });
  }

  mostrarDetalhes(id: string): void {
    const dialogRef = this.dialog.open(DetalhadaComponent, {});
    dialogRef.componentInstance.id = id;

    dialogRef.afterClosed().subscribe(result => {
      this.exibirTodasPublicacoes();
    });
  }

  aplicaFiltro(valorDigitadoInput: any) {
    let conteudoDigitado = valorDigitadoInput.target.value;

    if (conteudoDigitado) {
      this.buscarNome = conteudoDigitado;
      this.filtro();
    }
    else
      this.exibirTodasPublicacoes();

    if (conteudoDigitado.length == 0) 
      this.buscarNome = '';
  }

  private filtro() {
    if (this.buscarNome.length < 1) return;
    this.buscarNome = this.buscarNome.toLowerCase();

    this.publicacoesFiltrado = this.publicacoes.filter((publicacao: Publicacao) => {
      if (!isNaN(Number(this.buscarNome)))
        return publicacao.price == Number(this.buscarNome);
      else
        return publicacao.title.toLowerCase().includes(this.buscarNome) || publicacao.description.toLowerCase().includes(this.buscarNome)
    });
  }

  exibirTodasPublicacoes() {
    this.service.todasPublicacoes().subscribe((publicacoes: Publicacao[]) => {
      this.publicacoes = publicacoes;
      this.publicacoesFiltrado = publicacoes;
    })
  }

  deletarPublicacao(id: string) {
    this.service.deletarPublicacao(id).subscribe(() => {
      this.exibirTodasPublicacoes();
    })
  }
}