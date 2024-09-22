import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  navigateTo(route: string) {
    this.router.navigate([route]).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
