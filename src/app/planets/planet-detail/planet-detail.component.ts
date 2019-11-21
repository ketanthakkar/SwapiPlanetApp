import { OnInit, Component } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../entities/planet';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-planet-detail',
    templateUrl: './planet-detail.component.html',
    styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

    public planet: Planet;

    constructor(
        private route: ActivatedRoute,
        private planetService: PlanetService,
        private sharedService: SharedService,
        private spinner: NgxSpinnerService,
    ) {}

    ngOnInit() {
        this.sharedService.showBackButton();
        this.spinner.show();
        this.getPlanetDetail();
    }

    private getPlanetDetail(): void {
        this.planetService.getPlanetDetail(this.route.snapshot.paramMap.get('id')).subscribe(planet => {
            this.planet = planet;
            this.spinner.hide();
        });
    }
}
