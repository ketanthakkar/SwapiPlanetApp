import { Component, OnInit } from '@angular/core';

import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../entities/planet';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { SharedService } from 'src/app/services/shared.service';
import { PlanetList } from 'src/app/entities/planetList';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css'],
})
export class PlanetListComponent implements OnInit {

  public planets: Planet[];
  public totalPlanets = 0;
  public showPagination = true;

  private requestUrl = '';
  private previousPage = '';
  private url = 'https://swapi.co/api/planets/';
  private currentPage = 0;

  constructor(
    private planetService: PlanetService,
    private sharedService: SharedService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit() {
    this.requestUrl = `${this.url}?page=1`;
    this.getPlanets(this.requestUrl);
    this.spinner.show();

    // this.totalPlanets = 60;

    this.sharedService.planetName.subscribe(name => {
      if (name.length > 0) {
        this.showPagination = false;
        this.searchPlanet(name);
      } else {
        this.requestUrl = `${this.url}?page=1`;
        this.showPagination = true;
        this.getPlanets(this.requestUrl);
      }
    });
  }

  private getPlanets(url: string): void {
    this.planetService.getPlanets(url).subscribe(planet => {
      this.spinner.hide();
      const pageNumber = url.split('=')[1];
      localStorage.setItem(`page${pageNumber}`, JSON.stringify(planet));
      this.setData(planet);
    });
  }

  private setData(planetObj: PlanetList) {
    this.planets = planetObj.results;
    this.totalPlanets = planetObj.count;
    this.requestUrl = planetObj.next;
    this.previousPage = planetObj.previous;
  }

  getDetail(planet: Planet) {
    const palnetId = planet.url.split(this.url).pop().split('/')[0];
    this.router.navigate([`/planet/${palnetId}`]);
  }

  getPlanetData(event?: PageEvent) {
    if (this.currentPage < event.pageIndex) {
      this.getPlanets(this.requestUrl);
    } else {
      if(localStorage.getItem(`page${event.pageIndex+1}`) !== null) {
        this.setData(JSON.parse(localStorage.getItem(`page${event.pageIndex+1}`)));
      }
      else {
        this.getPlanets(this.previousPage);
      }
    }

    this.currentPage = event.pageIndex;
  }

  private searchPlanet(name: string) {
    const searchUrl = `${this.url}?search=${name}`;
    this.getPlanets(searchUrl);
  }
}
