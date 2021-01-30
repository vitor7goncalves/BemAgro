import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { ContatoService } from '../contato.service';

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
    this.listar();
  }
  listar() {
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


