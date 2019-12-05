import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { ClientsService } from '../clients.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  clientForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private clientservice: ClientsService) { }


  ngOnInit() {}
    onSubmit() {
      this.clientservice
      .addNewClient(this.clientForm.value)
      .subscribe(client=>console.log(client));
  }

  }