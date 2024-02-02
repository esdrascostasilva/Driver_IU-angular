import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor() {}

  public getDrivers(): Driver[] {
    let driver = new Driver();
    driver.name = 'Lewis Hamilton';
    driver.id = 1;
    driver.number = '44';
    driver.team = 'Mercedez até pouco tempo';

    return [driver];
  }
}
