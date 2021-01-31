
import { Component, OnInit} from '@angular/core';
import { Dados } from '../cliente.model';
import { ClienteService } from '../cliente.service';

 let L: any
@Component({
    selector: 'app-cliente-lista',
    templateUrl: './cliente-lista.component.html',
})



export class ClienteListaComponent implements OnInit {

  dadosCliente: any;
  erro: any;
  
  constructor(private clienteService: ClienteService) {
    this.dateClient();
  }

  ngOnInit(): void {}
  dateClient() {
    this.clienteService.clientHub().subscribe((dados: Dados) =>{
        this.dadosCliente = dados;
    }, (error: any) => {
        this.erro = error;
    });
  }
 
}


