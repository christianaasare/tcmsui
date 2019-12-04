import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    // {projectID:'1', clientID:'2918', title:'Microservice', description:'Microservice API', duration:'3'},
    // {projectID:'2', clientID:'2839', title:'Concurrency', description:'Concurrency ', duration:'6'},
    // {projectID:'3', clientID:'3679', title:'Web Design', description:'Web design', duration:'4'},
    // {projectID:'4', clientID:'2918', title:'Microservice', description:'Micro', duration:'3'},
    // {projectID:'5', clientID:'2918', title:'Microservice', description:'Microservice API', duration:'3'},
    // {projectID:'6', clientID:'2839', title:'Concurrency', description:'Concurrency ', duration:'6'},
    // {projectID:'7', clientID:'3679', title:'Web Design', description:'Web design', duration:'4'}
    
  ]

  constructor(private projectservice: ProjectsService) { }

  getProjects(): void{
    this.projectservice.getProjects()
    .subscribe(data=> this.projects=data);
  }

  ngOnInit() {
    this.getProjects();
  }

}
