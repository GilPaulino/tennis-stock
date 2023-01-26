
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacao } from '../models/publicacao.model';
import { PublicacaoService } from '../services/publicacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit, AfterViewInit {

  
  @Output() aoPostar = new EventEmitter<any>();
  publicacoes = {} as Publicacao;
  nomeArquivo: string = '';
  id: string | null;
  imageBase64: string = '';
  title: string = '';
  description: string = '';
  price: number = 0;

  constructor(
    public dialogRef: MatDialogRef<CadastroComponent>,
    private service: PublicacaoService,
    private router: Router,
    route: ActivatedRoute) { 
      this.id = route.snapshot.paramMap.get('id');
    }
  ngAfterViewInit(): void {
  }

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

  public async mudancaFormatoImg(mudanca: any): Promise<void> {
    let fileTOUpload = <File>mudanca.target.files[0];    
    this.publicacoes.imageBase64 = await this.analisaBase64(fileTOUpload);
        
  }

  public async analisaBase64(file: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let leitor = new FileReader();

      leitor.onload = () => {resolve(leitor.result)};

      leitor.onerror = reject;

      leitor.readAsDataURL(file);

      this.nomeArquivo = file.name;       
      
    })    
    
  }

  postar() {    
    this.service.cadastrarOuAlterar(this.publicacoes).subscribe(resultado => {
      console.log(this.publicacoes)
      this.exibirPublicacaoUnica();
      this.fecharDialog()      
    },
      (error) => console.error(error)
    )

  }

  limparImagem(){
    this.publicacoes.imageBase64 = '';
    
  }

  limparCampos(){
    this.publicacoes.title = '';
    this.publicacoes.description = '';
    this.publicacoes.imageBase64 = '';
    
  } 

}