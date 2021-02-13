import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';  //MÓDULO HTTPCLIENTE, PARA SER POSSIVEL UTILIZAR OS MÉTODOS HTTP NA API
import { Observable } from 'rxjs';
import { Lembrete } from '../interface/lembrete';

@Injectable({             //INJECTABLE PERMITE QUE QUALQUER COMPONENTE UTILIZE ESTA CLASSE
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }                        //NOS PARAMÊTROS DO CONSTRUCTOR, UMA VARIAVEL DO TIPO HTTP É CRIADA

  getListaLembretes(): Observable<Lembrete[]> {                    //O MÓDULO HTTPCLIENT É DO TIPO OBSERVABLE, PARA RETORNAR OS DADOS ATRAVÉS DA API
    const url = `${environment.lembreteApiUrl}/lembrete`;          //CONST URL É O LINK DA API, ONDE HÁ INTERPOLAÇÃO DA CLASSE E VARIAVEL ENVIRONMENT.LEMBRETEAPIURL
    return this.http.get<Lembrete[]>(url);                         //RETORNO COM O OBJETO HTTP E O MÉTODO GET, EM ARRAY, POIS TRATA SE DE RETORNAR VÁRIOS DADOS DA API DE UMA VEZ
  }

  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }

}


//ESSA CLASSE PERMITE CRIAR METODOS PARA MANIPULAR A API 