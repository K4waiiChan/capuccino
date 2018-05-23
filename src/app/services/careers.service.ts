import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareersService {
  private url: string;
  private careers;
  constructor(private httpClient: HttpClient) {
  }
  public getCareers(): Observable<any> {
    return this.httpClient.get('../../assets/careers-data.json');
  }
  public getCareer(code: string): Observable<any> {
    return this.httpClient.get('../../assets/careers/' + code + '.json');
  }
}
