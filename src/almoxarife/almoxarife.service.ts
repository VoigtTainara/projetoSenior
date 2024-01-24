//import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

//@Injectable({
//  providedIn: 'root'
//})
//export class CompraService {
//  private apiUrl = '';

//  constructor(private http: HttpClient) {}

//A TABELA QUE REALIZARIA A ALTERAÇÃO:
//UPDATE Compra
//SET AcaoAprovacao = 'nova_acao', Observacao = 'novas_observacoes'
//WHERE Id = seu_id;


//  submeterAprovaOuReprova(compraDados: any): Observable<any> {
    // Atualiza ou insere. Depende se já existe o id ou não.
//    const url = compraData.Id ? `${this.apiUrl}/update` : `${this.apiUrl}/submit`;
//
//    return this.http.post<any>(url, compraData);
//  }
//}