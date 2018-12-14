import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardsComponent } from './cards/cards.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'cards',  component: CardsComponent,
   children: [
    { path: ':name',  component: CardDetailComponent }]},
    { path: 'welcome', pathMatch: 'full', component: WelcomePageComponent },
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
