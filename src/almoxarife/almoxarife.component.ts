import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-almoxarife',
  standalone: true,
  imports: [],
  templateUrl: './almoxarife.component.html',
  styleUrl: './almoxarife.component.css'
})
export class AlmoxarifeComponent {
  title = "Chegou no almoxarife!!";
  acaoAprovacao: string = '';
  observacao: string = '';
  solicitacao = {
  //  @Input() solicitante: string;
  //  @Input() descricaoItem: string;
  //  @Input() precoProduto: string;
  }

 
  solicitante: string = 'Maria teste';
  descricaoItem: string = "xxx";
  precoProduto: string = "1,00"

   compraDados = {
    acaoAprovacao: this.acaoAprovacao,
    observacao: this.observacao,
  };

  //constructor(private almoxarifeService: AlmoxarifeService) {}

  //submeterAprovaOuReprova(){
    //this.almoxarifeService.submeterAprovaOuReprova(this.compraDados).subscribe(response => {
    //  console.log('Submissão realizada com sucesso!!', response);
    //});
  //}
}
 