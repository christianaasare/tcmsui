import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients = [
    // {clientID:'1', name:'Sam', phone:'0208182737', email:'Microservice API', address:'3'},
    // {clientID:'2', name:'Pauline', phone:'0208182737', email:'Concurrency ', address:'6'},
    // {clientID:'3', name:'Robert', phone:'0208182737', email:'Web design', address:'4'},
    // {clientID:'4', name:'Jim', phone:'0208182737', email:'Micro', address:'3'},
    // {clientID:'5', name:'Shirley', phone:'0208182737', email:'Microservice API', address:'3'},
    // {clientID:'6', name:'Beatrice', phone:'0208182737', description:'Concurrency ', address:'6'},
    // {clientID:'7', name:'SImmy', phone:'0208182737', email:'Web design', address:'4'}
    
  ]


  constructor(private clientservice: ClientsService) { }
  
  getClients(): void{
    this.clientservice.getClients()
    .subscribe(data=> this.clients=data);
  }

  ngOnInit() {
    this.getClients();
  }

}
