
import { Component, OnInit} from '@angular/core';
import { ContatoService } from '../contato.service';

 let L: any
@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})



export class ContatosListagemComponent implements OnInit {

  contatos!: Array<any>;

  names: string[] = []
  name = ''
  

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.contatoService.listar().subscribe(dados => this.contatos = dados);
  }
  onSearch() {

    this.names.push(this.name);
    this.name = ""
  }


  Delete() {
    this.names.pop()
  }

}


