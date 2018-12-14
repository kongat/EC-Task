# YugiohApp
Run npm install, npm start in the project folder.

The pjoject contains one landing page which links to the major page that was descriped in the specs file.
The major page contains a list of cards on the left.The user has the ability to click the name of each card and view the details of the card in the detail-component.I chose to create this functionality with routing and not by having a selected card which will be an input to the details component(the aproach of the tour-of-heroes tutorial) as I wanted to try and demonstrrate something different.

The user can also select 3 cards to be his starting cards for the game by clicking the plus icon,and remove a card from his starting cards by clicking the minus icon.

As there was no available rest endpoint to get all cards, I hard-coded the names of each card given in the specs file into an array.
Then in the cards component I used map function to the array and for each card name I consumed the api, got back a response(card data)
and store it in a new array of cards.

I also used Bootstrap and NgPrime for styling.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
