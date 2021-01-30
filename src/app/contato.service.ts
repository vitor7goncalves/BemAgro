import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatoUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.contatoUrl}`)
  }
}
