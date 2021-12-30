import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammerListComponent } from './programmer-list/programmer-list.component';
import { ProgrammerUpdateComponent } from './programmer-update/programmer-update.component';
import { ProgrammerDetailsComponent } from './programmer-details/programmer-details.component';
import { CreateProgrammerComponent } from './create-programmer/create-programmer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'programmers', component: ProgrammerListComponent},
  {path: 'create-programmer', component: CreateProgrammerComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'update-programmer/:id', component: ProgrammerUpdateComponent},
  {path: 'programmer-details/:id', component: ProgrammerDetailsComponent},
  {path: 'home', component: HomeComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
