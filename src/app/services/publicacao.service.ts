import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacao } from '../models/publicacao.model';


@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {
  private listaPublicacao: any[];
  private url = `http://gilberto.processoseletivo.inovamobil.com.br/v1/products`;

  constructor(private httpClient: HttpClient) {
    this.listaPublicacao = [];
  }

  get publicacoes() {
    return this.listaPublicacao
  }

  todasPublicacoes(): Observable<Publicacao[]> {
    return this.httpClient.get<Publicacao[]>(this.url);
  }

  publicacaoUnica(id: string): Observable<Publicacao> {
    return this.httpClient.get<Publicacao>(`${this.url}/${id}`);
  }

  adicionaPublicacao(publicacao: Publicacao): Observable<Publicacao> {
    return this.httpClient.post<Publicacao>(this.url, publicacao)
  }

  editarPublicacao(publicacao: Publicacao): Observable<Publicacao> {
    return this.httpClient.put<Publicacao>(this.url, publicacao)
  }

  cadastrarOuAlterar(publicacao: Publicacao): Observable<Publicacao> {
    return publicacao.id == 0 ? this.adicionaPublicacao(publicacao) : this.editarPublicacao(publicacao); 
    // if (publicacao.id == 0) 
    //   return this.adicionaPublicacao(publicacao);
    // else 
    //   return this.editarPublicacao(publicacao);
  }

  deletarPublicacao(id: string): Observable<Publicacao> {
    return this.httpClient.delete<Publicacao>(`${this.url}/${id}`);
  }

  detalhesPublicacao(id: string): Observable<Publicacao> {
    return this.httpClient.get<Publicacao>(`${this.url}/${id}`)
  }
}