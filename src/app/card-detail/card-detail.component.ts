import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  card: Card;
  cardImageUrlBase = 'http://52.57.88.137/api/card_image/';
  cardImageUrl: string;


  constructor(private route: ActivatedRoute,
              private cardService: CardService) {
              }

  ngOnInit() {
    // get the url parameter
    this.route.params.subscribe(val => {
      const name = this.route.snapshot.paramMap.get('name');

      // get the data of the card
      this.cardService.getCard(name)
      .subscribe( response => {
        console.log(response.data);
        this.card = response.data;
        this.cardImageUrl = this.cardImageUrlBase + response.data.name;
        console.log(this.card);
      });
    });
  }
}
