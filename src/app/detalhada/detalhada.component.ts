import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Publicacao } from '../models/publicacao.model';
import { PublicacaoService } from '../services/publicacao.service';

@Component({
  selector: 'app-detalhada',
  templateUrl: './detalhada.component.html',
  styleUrls: ['./detalhada.component.scss']
})
export class DetalhadaComponent implements OnInit, AfterViewInit {

  publicacoes = {} as Publicacao;
  id: string | null;
  // imageBase64: string = '';
  // title: string = '';
  // description: string = '';
  // price: number = 0;
  
  constructor(
    public dialogRef: MatDialogRef<DetalhadaComponent>,
    private service: PublicacaoService,
    private router: Router,
    route: ActivatedRoute) {
      this.id = route.snapshot.paramMap.get('id')
    }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.exibirPublicacaoUnica();
  }  

  fecharDialog(): void {
    this.dialogRef.close();
    
  }
 
  public definePublicacao(publicacao: Publicacao):void {
    this.publicacoes = publicacao;
    
  }
  
  public exibirPublicacaoUnica(): void {
    if(!this.id){
      this.publicacoes.id = 0
      return;
    }     
    this.service.publicacaoUnica(this.id).subscribe((publicacoes: Publicacao) =>{
      
      this.definePublicacao(publicacoes);
  })
  }

}