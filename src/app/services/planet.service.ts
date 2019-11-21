import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Planet } from '../entities/planet';
import { PlanetList } from '../entities/planetList';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private planetsUrl = 'https://swapi.co/api/planets';

  constructor(private http: HttpClient) { }

  public getPlanets(url: string): Observable<PlanetList> {
    return this.http.get<PlanetList>(url)
      .pipe(
        tap(response => this.log(response + '')),
        catchError(this.handleError)
      );
  }

  public getPlanetDetail(id: string): Observable<Planet> {
    const url = `${this.planetsUrl}/${id}/`;
    return this.http.get<Planet>(url)
      .pipe(
        tap(response => this.log(response + '')),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private log(message: string) {
    console.log(`Service: ${message}`);
  }
}

