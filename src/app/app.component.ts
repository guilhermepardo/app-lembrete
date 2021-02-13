import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';  //IMPORTANDO A CLASSE DO COMPONENTE DE MENSAGEM DE ERRO

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'CRUD LEMBRETE';

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;  //ViewChield permite usar a classe de outro componente, sendo necessário para instânciar um objeto

  ngOnInit() {                                                        //ngOnInit é um lifecicle hook, que diz que tal método deve aparecer após o componente onde ele está inserido carregar completamente
    this.errorMsgComponent.setError("Mensagem de erro!");             //Classe do componente de erro, utilizando o método setError, passando no parâmetro a mensagem que deve aparecer
  }

}
