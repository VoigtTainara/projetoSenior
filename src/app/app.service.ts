//import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

//@Injectable({
//  providedIn: 'root'
//})
//export class AppService {
//  private apiUrl = 'http://localhost:3000';

//  constructor(private http: HttpClient) {}

//A TABELA QUE REGISTRA SOLICITAÇÕES:
//    CREATE TABLE Compra (
//    Id INT PRIMARY KEY IDENTITY(1,1),
//    NomeSolicitante NVARCHAR(255),
//    DescricaoItem NVARCHAR(MAX),
//    PrecoProduto NVARCHAR(10),
//    AcaoAprovacao NVARCHAR(10),
//    Observacao NVARCHAR(MAX)
//    );


//  registrarSolicitacao(nome: string, descricao: string, preco: string): Observable<any> {
//    console.log("Entrou no registrarSolicitacao");
    //const body = { nome, descricao, preco };
    //return this.http.post(`${this.apiUrl}/solicitacao`, body);
//  }
//} 