import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiKey = '';
  private cx = '017576662512468239146:omuauf_lfve';
  private apiUrl = 'https://www.googleapis.com/customsearch/v1';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&cx=${this.cx}&q=${query}`;
    return this.http.get<any>(url);
  }
}
