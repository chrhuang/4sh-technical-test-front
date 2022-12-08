import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movement } from './movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  readonly API_URL = 'http://localhost:8080';

  readonly ENDPOINT = '/movement';

  constructor(private httpClient: HttpClient) {

  }

  getMovements() {
    return this.httpClient.get(this.API_URL + this.ENDPOINT + '/index');
  }

  createMovement(movement: Movement, entry: boolean): Observable<Object> {
    movement.entry = entry;
    movement.warehouse = 'RAPIDCARGO';
    return this.httpClient.post(this.API_URL + this.ENDPOINT, movement);
  }
}
