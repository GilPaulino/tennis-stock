import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private listaProduto: any[];
  private url = `http://gilberto.processoseletivo.inovamobil.com.br/v1/products`;

  constructor(private dialog: MatDialog,
    private httpClient: HttpClient) {
    this.listaProduto = [];
  }

  get produto() {
    return this.listaProduto
  }

  pegarTodosProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url);
  }

  pegarProdutoPorId(id: string): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.url}/${id}`);
  }

  adicionarProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.url, produto);
  }

  editarProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(this.url, produto);
  }

  adicionarOuEditarProduto(produto: Produto): Observable<Produto> {
    return produto.id == 0 ? this.adicionarProduto(produto)
                           : this.editarProduto(produto);
  }

  deletarProduto(id: string): Observable<Produto> {
    return this.httpClient.delete<Produto>(`${this.url}/${id}`);
  }

}