import { Component, OnDestroy, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'modal-open');
   }

   ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

}
