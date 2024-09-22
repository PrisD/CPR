import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent {

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  navigateToNewsWithFragment(fragment: string) {
    this.router.navigate(['/news']).then(() => {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(fragment);
      }, 0);
    });
  }
  
  
  
  
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
