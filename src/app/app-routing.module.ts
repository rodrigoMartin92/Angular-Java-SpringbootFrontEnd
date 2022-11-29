import { EditMaterialComponent } from './components/material/edit-material.component';
import { AddMaterialComponent } from './components/material/add-material.component';
import { MaterialComponent } from './components/material/material.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: MaterialComponent},
  {path:"nuevo", component: AddMaterialComponent},
  {path:"editar/:id", component: EditMaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
