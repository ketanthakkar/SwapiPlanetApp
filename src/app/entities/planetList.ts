import { Planet } from './planet';

export class PlanetList {

    count: 0;
    next: '';
    previous: '';
    results: Planet[];

    constructor(properties: any) {
        Object.assign(this, properties);
    }
}
