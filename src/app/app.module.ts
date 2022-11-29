import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './components/material/material.component';
import { AddMaterialComponent } from './components/material/add-material.component';
import { FormsModule } from '@angular/forms';
import { EditMaterialComponent } from './components/material/edit-material.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    AddMaterialComponent,
    EditMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
