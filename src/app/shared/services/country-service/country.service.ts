import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { countries } from '../../constants/countries.data';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  public getCountries(): Observable<string[]> {
    return of(countries);
  }
}
