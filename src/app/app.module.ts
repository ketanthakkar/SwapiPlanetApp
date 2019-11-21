import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';

import { MatGridListModule, MatPaginatorModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PlanetListComponent,
    PlanetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
