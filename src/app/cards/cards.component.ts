import { Component, OnInit } from '@angular/core';
import { CARDS } from '../mock-cards';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  startingCards: Card[] = [];

  constructor( private cardService: CardService) { }

  ngOnInit() {

  // get all cards
      CARDS.map( card =>
      this.cardService.getCard(card.name)
      .subscribe(
        responseCard => {
        this.cards.push(responseCard.data);
        console.log(this.cards);
        }
      ));
  }

  // add the clicked card to the 3 starting cards
  addToStarting(addedCard: Card) {

    if (this.startingCards.length < 3 && (!this.startingCards.find(card => card.name === addedCard.name))) {
      this.startingCards.push(addedCard);
    }
  }
  // remove the clicked card from the 3 starting cards
  removeFromStarting(removedCard: Card) {
    this.startingCards = this.startingCards.filter(
      card => card.name !== removedCard.name
    );

  }

}
