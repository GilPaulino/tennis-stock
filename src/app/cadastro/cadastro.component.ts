
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  produto: Produto = {} as Produto;
  nomeImagem: string = '';

  constructor(
    public dialogRef: MatDialogRef<CadastroComponent>,
    private service: ProdutoService) {}
  
  ngOnInit(): void {
    // this.pegarProdutoPorId();
  }

  fecharDialog(): void {
    this.dialogRef.close();
  }

  // public defineProduto(produto: Produto): void {
  //   this.produtos = produto;
  // }

  // public pegarProdutoPorId(): void {
  //   if (!this.id) {
  //     this.produtos.id = 0
  //     return;
  //   }
  //   this.service.pegarProdutoPorId(this.id).subscribe((produtos: Produto) => {
  //     this.defineProduto(produtos);
  //   })
  // }

// **
  public async mudancaFormatoImg(mudanca: any): Promise<void> {
    let fileTOUpload = <File>mudanca.target.files[0];
    this.produto.imageBase64 = await this.analisaBase64(fileTOUpload);
    
  }
  
  public async analisaBase64(file: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let leitor = new FileReader();
      leitor.onload = () => { resolve(leitor.result) };
      leitor.onerror = reject;
      leitor.readAsDataURL(file);      
      this.nomeImagem = file.name;
    })
  }
// **

  postar(): void {
    console.log(this.produto)
    this.service.adicionarOuEditarProduto(this.produto).subscribe(() =>{
      this.fecharDialog()
    },
      (error) => console.error(error)
    )
  }

  limparImagem(): void {
    this.produto.imageBase64 = '';
  }

  limparCampos(): void {
    this.produto.title = '';
    this.produto.description = '';
    this.produto.price = 0;
    this.limparImagem();
  }

}