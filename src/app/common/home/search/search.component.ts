import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  query: string = ''; 

  buscar() {
    if (this.query.trim()) {
      window.location.href = `/search-result?q=${encodeURIComponent(this.query)}`;
    }
  }
}