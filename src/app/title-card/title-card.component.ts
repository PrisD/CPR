import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrl: './title-card.component.css'
})
export class TitleCardComponent implements OnInit{
  @Input() title: string = ''; 
  @Input() subtitle: string= '';
  @Input() imageUrl: string = '';
  @Input() color: string = '';

  ngOnInit(): void {
    
  }

}
