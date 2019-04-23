import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/petDetails', pathMatch: 'full' },
  { path: 'petDetails', component: PetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
