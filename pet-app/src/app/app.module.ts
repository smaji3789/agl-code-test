import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowPetsComponent } from './components/show-pets/show-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    PetDetailsComponent,
    ShowPetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
