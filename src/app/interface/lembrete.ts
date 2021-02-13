type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';

export interface Lembrete {
    id : number;
    conteudo : string;
    arquivado : boolean;
    prioridade : prioridade;
    modificado : number; 
}


//INSERINDO OS DADOS QUE SERÃO ADQUIRIDOS PELA API, COM TIPAGEM ESTATICA
//PORTANTO, É UMA INTERFACE

//ng g interface lembrete