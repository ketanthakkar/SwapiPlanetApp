import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    @Output() planetName: EventEmitter<string> = new EventEmitter();

    public showBackIcon = false;
    public dataChangeObserver: Subject<boolean> = new Subject<boolean>();

    searchPlanet(name: string) {
        this.planetName.emit(name);
    }

    showBackButton() {
        this.dataChangeObserver.next(!this.showBackIcon);
    }
}
