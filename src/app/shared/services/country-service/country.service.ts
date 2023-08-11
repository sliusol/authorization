import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<string[]> {
    return this.http.get<string[]>('/assets/country.json');
    
  }
  
}
