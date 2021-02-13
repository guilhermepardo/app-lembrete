import { Component } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent  {

  public error: string;

  setError(error: string, tempo: number = 5000) {            //MÉTODO CRIADO PARA RETORNAR UMA MENSAGEM DE ERRO, ONDE UTILIZA OUTRO 
    this.error = error;                                      //MÉTODO, setTimeout, PARA DEFINIR O TEMPO EM QUE A MENSAGEM IRÁ APARECER NO TEMPLATE
    setTimeout(() => {
      this.error = null;
    }, tempo);
  }


}
