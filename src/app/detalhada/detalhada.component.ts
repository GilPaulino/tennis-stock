import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Publicacao } from '../models/publicacao.model';
import { PublicacaoService } from '../services/publicacao.service';

@Component({
  selector: 'app-detalhada',
  templateUrl: './detalhada.component.html',
  styleUrls: ['./detalhada.component.scss']
})
export class DetalhadaComponent implements OnInit {

  id: string = '';
  publicacoes = {} as Publicacao;

  constructor(
    public dialogRef: MatDialogRef<DetalhadaComponent>,
    private service: PublicacaoService,
  ) {
  }

  ngOnInit(): void {
    this.exibirPublicacaoUnica();
  }

  fecharDialog(): void {
    this.dialogRef.close();
  }

  public definePublicacao(publicacao: Publicacao): void {
    this.publicacoes = publicacao;
  }

  public exibirPublicacaoUnica(): void {
    if (!this.id) {
      this.publicacoes.id = 0
      return
    }
    this.service.publicacaoUnica(this.id).subscribe((publicacoes: Publicacao) => {
      this.definePublicacao(publicacoes);
    })
  }
}