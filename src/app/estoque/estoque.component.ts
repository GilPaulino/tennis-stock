import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  public busca: string = '';
  id: string | null;
  publicacaoComId: string = '';
  constructor(
    public dialog: MatDialog,
    private service: PublicacaoService,
    private router: Router,
    route: ActivatedRoute) { 
      this.id = route.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.exibirTodasPublicacoes();
  }

  

  cadastrarProduto(): void {
    const dialogRef = this.dialog.open(CadastroComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.exibirTodasPublicacoes();    
    });
  }

  mostrarDetalhes(): void {
    const dialogRef = this.dialog.open(DetalhadaComponent, {}
      
      );
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


  aplicaFiltro(valorDigitadoInput: any) {
    let conteudoDigitado = valorDigitadoInput.target.value; 
    
    
    if (conteudoDigitado) {
      this.busca = conteudoDigitado;
      this.filtro();     
    }
    else {
      this.exibirTodasPublicacoes();
    }
    if(conteudoDigitado.length == 0){      
      this.busca = '';      
    }   
  }

  private filtro() {
    let arrayPublicacao = [];
    
    for (let i = 0; i < this.publicacoes.length; i++) {
      if (this.publicacoes[i].title.includes(this.busca)){
        arrayPublicacao.push(this.publicacoes[i])
      }
      if(this.publicacoes[i].description.includes(this.busca)){
        arrayPublicacao.push(this.publicacoes[i])
      }      
      
    }      
    if (arrayPublicacao) {
      this.publicacoesFiltrado = arrayPublicacao;
      this.exibirTodasPublicacoes
    }

          
  }

  exibirTodasPublicacoes() {
    this.service.todasPublicacoes().subscribe((publicacoes: Publicacao[]) => {
      this.publicacoes = publicacoes;
      this.publicacoesFiltrado = publicacoes;
      
    })    
   
  }

  deletarPublicacao(id: string) {
    this.service.deletarPublicacao(id).subscribe((publicacoes: Publicacao) => {
      this.exibirTodasPublicacoes();      
    })   
    
  }

  detalhesPublicacao(id:string){
    this.service.detalhesPublicacao(id).subscribe ((publicacoes: Publicacao) => {
      this.router.navigateByUrl(`detalhada`)
      this.service.publicacaoUnica(id)      
    })
  } 
 
}