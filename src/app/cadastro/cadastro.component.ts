
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Publicacao } from '../models/publicacao.model';
import { PublicacaoService } from '../services/publicacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  publicacoes = {} as Publicacao;
  nomeArquivo: string = '';
  id: string = '';

  constructor(
    public dialogRef: MatDialogRef<CadastroComponent>,
    private service: PublicacaoService) {}
  
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
      return;
    }
    this.service.publicacaoUnica(this.id).subscribe((publicacoes: Publicacao) => {

      this.definePublicacao(publicacoes);
    })
  }
// **
  public async mudancaFormatoImg(mudanca: any): Promise<void> {
    let fileTOUpload = <File>mudanca.target.files[0];
    this.publicacoes.imageBase64 = await this.analisaBase64(fileTOUpload);
  }

  public async analisaBase64(file: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let leitor = new FileReader();
      leitor.onload = () => { resolve(leitor.result) };
      leitor.onerror = reject;
      leitor.readAsDataURL(file);
      this.nomeArquivo = file.name;
    })
  }
// **
  postar(): void {
    this.service.cadastrarOuAlterar(this.publicacoes).subscribe(() =>{
      console.log(this.publicacoes)
      this.fecharDialog()
    },
      (error) => console.error(error)
    )

  }

  limparImagem(): void {
    this.publicacoes.imageBase64 = '';

  }

  limparCampos(): void {
    this.publicacoes.title = '';
    this.publicacoes.description = '';
    this.publicacoes.price = 0;
    this.limparImagem();

  }

}