import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Dados } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteUrl = 'https://api.github.com/users/mojombo';
  constructor(private http: HttpClient) { }

  public clientHub():Observable<Dados>{
      return this.http.get<Dados>(`${this.clienteUrl}`)
  }

}
