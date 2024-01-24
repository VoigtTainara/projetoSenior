import { Component } from '@angular/core';

@Component({
  selector: 'app-administrativo',
  standalone: true,
  imports: [],
  templateUrl: './administrativo.component.html',
  styleUrl: './administrativo.component.css'
})
export class AdministrativoComponent {
  title = "Chegou no administrativo!!";
  //busca todas solicitações.
  solicitacoesCompra: any[] = [];
  filtros = {
    status: '',
    nomeSolicitante: '',
    descricaoItem: ''
  };

//  constructor(private administrativoService: AdministrativoService) {}

  buscarSolicitacoes(): void {
//    this.administrativoService.buscarSolicitacoes(this.filtros).subscribe(solicitacoesCompra => {
//      this.solicitacoesCompra = solicitacoesCompra;
//    });
  }

  //o filtro pode ser alterado a qualquer momento, por isso é necessário fazer nova busca quando trocado o filtro
  statusChange(event: any) {
    this.filtros.status = event.target.value;
  }
}
