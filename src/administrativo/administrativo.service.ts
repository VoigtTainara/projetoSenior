//import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

//@Injectable({
//  providedIn: 'root'
//})
//export class AdministrativoService {
//private apiUrl = "";

//  constructor(private http: HttpClient) {}

//A TABELA QUE BUSCA TODAS SOLICITAÇÕES DE COMPRA:
// SELECT * FROM Compra;


//  buscarSolicitacoes(filtros: any): Observable<any[]> {
//    return this.http.get<any[]>(`${this.apiUrl}/buscar`, { params: filtros });
//  }
//}