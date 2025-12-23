import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  query: string = '';

  constructor(private router: Router) {}

  buscar() {
    if (this.query.trim()) {
      this.router.navigate(['/search-result'], { queryParams: { q: this.query } });
    }
  }
}
