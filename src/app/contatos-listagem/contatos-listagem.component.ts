import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos!: Array<any>;
  name = "";
  names: string[] = []
  

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(){
     this.contatoService.listar().subscribe(dados => this.contatos = dados);
  }
  addInput() {
    if(this.name.length !== 0){
      this.names.push(this.name);
      this.name= "";
    }
    console.log(this.names)
  }
  Delete(){
    console.log("Ola")
  }

}


