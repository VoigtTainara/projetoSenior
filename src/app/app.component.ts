import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sistema de compras';
  solicitante: string = '';
  descricaoItem: string = '';
  precoProduto: string= '';
  compraRegistrada: boolean = false;
  redirecionou: boolean = false;

  constructor(private router: Router) {} //private appService: AppService

  redirecionarParaAlmoxarife(): void {
    console.log('Redirecionando para o almoxarife:');
    this.router.navigate(['almoxarife']);
  }

  redirecionarParaAdministrativo(): void {
    console.log('Redirecionando para o administrativo:');
    this.router.navigate(['administrativo']);
  }

  registrarCompra(solicitante: string, descricaoItem: string, precoProduto: string): void {
    this.compraRegistrada = true;
    // verificando se aparece no log
    console.log('Nome do Solicitante:', solicitante);
    console.log('Descrição do Item:', descricaoItem);
    console.log('Preço do Produto:', precoProduto);

//    this.appService.registrarSolicitacao(this.solicitante, this.descricaoItem, this.precoProduto)
//      .subscribe(
//        response => {
//          console.log('Solicitação registrada com sucesso:', response);
//          // limpando campos
//          this.solicitante = '';
//          this.descricaoItem = '';
//          this.precoProduto = '';
//        },
//        error => {
//         console.error('Erro ao registrar solicitação:', error);
//        }
//      );
 }



}



  
 
