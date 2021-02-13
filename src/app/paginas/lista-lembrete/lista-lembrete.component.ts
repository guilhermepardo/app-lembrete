import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from '../../interface/lembrete';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {

  public lembretes: Lembrete[];

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) {                                 //INJETANDO O LembreteService nos parâmetros, para ser possivel utilizar os seus métodos

  }               

  ngOnInit(): void {
    this.getListaLembretes();
  }

  //MÉTODO PARA RETORNAR A LISTA DE LEMBRETES
  getListaLembretes() {
    this.lembreteService.getListaLembretes()                                             //Utilizando um método da classe service de lembretes, que foi injetada acima
    .subscribe((lembretes: Lembrete[]) => {                                              //Método do Observable (subscribe), que faz retorna uma array de dados caso a requisição for bem sucedida
      this.lembretes = lembretes;                                                        //Retorno se tudo der certo
    }, () => {this.errorMsgComponent.setError('Falha ao buscar lembretes.');});          //Retorno se a requisição der errado, seja lá qual o motivo
  }

  //MÉTODO PARA DELETAR ALGUM LEMBRETE
  deletaLembrete(id: number) {                                                           //Parâmetro passa o id do lembrete que é desejado à ser deletado
    this.lembreteService.deletaLembrete(id)
    .subscribe((lembretes: Lembrete) => {
      this.getListaLembretes();                                                          //Retorno da array de dados da API caso a requisição dê certo
    }, () => {this.errorMsgComponent.setError('Falha ao deletar lembrete.');});          //Mensagem de erro caso alguma coisa dê errado na requisição
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }

}
