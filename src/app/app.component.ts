import { Component } from '@angular/core';
import { ProdutoService } from './services/produto.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gerenciador-de-estoque'; 

  constructor(private service: ProdutoService){}
 
}
