import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchQuery: string = '';

  constructor(private searchService: SearchService) { }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.searchService.search(this.searchQuery).subscribe((response) => {
        console.log('Resultados de la búsqueda:', response);
      });
    }
  }
}
