import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  CARD_URL = 'http://52.57.88.137/api/card_data/';

  constructor(private httpClient: HttpClient) { }

  // consume api to get the data of the card
  getCard(name: string): Observable<any> {

    return this.httpClient.get<any>
      (this.CARD_URL + name);
  }
}
