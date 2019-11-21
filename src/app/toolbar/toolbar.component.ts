import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PlanetListComponent } from '../planets/planet-list/planet-list.component';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() searchPlanet: EventEmitter<any> =   new EventEmitter();
  @Input() planetName: PlanetListComponent;

  public showIcon = false;

  constructor(
    private sharedService: SharedService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.sharedService.dataChangeObserver.subscribe(showIcon => {
      this.showIcon = showIcon;
    });
  }

  search(name: string) {
    this.sharedService.searchPlanet(name);
  }

  moveToBackPage() {
    this.showIcon = false;
    this.router.navigate([``]);
  }
}
