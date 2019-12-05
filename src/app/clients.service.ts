import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clients } from './clients';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clientsUrl = 'https://boiling-bastion-30474.herokuapp.com/clients';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor( private http: HttpClient) { }

//get clients from server
  getClients (): Observable<Clients[]> {
  return this.http.get<Clients[]>(this.clientsUrl)
  }

  // add new client
  addNewClient(client: Clients): Observable<Clients>{
    return this.http.post<Clients>(this.clientsUrl+ '/addAClient', client);
  }
 
}

