import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: 'home', component:HomeComponent },
  {path: 'clients', component:ClientsComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'form', component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
