export class Planet {

  name: '';
  diameter: '';
  climate: '';
  gravity: '';
  terrain: '';
  rotation_period: '';
  orbital_period: '';
  surface_water: '';
  population: '';
  url: '';

  constructor(properties: any) {
    Object.assign(this, properties);
  }
}
