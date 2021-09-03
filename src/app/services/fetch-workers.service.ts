import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchWorkersService {

  constructor(private httpClient: HttpClient) { }

  getWorkers() {
    return this.httpClient.get<any[]>('https://futuramaapi.herokuapp.com/api/v2/characters')
  }
}
