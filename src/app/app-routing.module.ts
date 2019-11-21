import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';


const routes: Routes = [
  { path: '', component: PlanetListComponent, pathMatch: 'full' },
  { path: 'planet/:id', component: PlanetDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
