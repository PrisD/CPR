import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrl: './title-card.component.css'
})
export class TitleCardComponent implements OnInit{
  @Input() title: string = ''; 
  @Input() titleFontSize: number = 0;
  @Input() titleFontSizeScreen: number = 0;
  @Input() subtitle: string= '';
  @Input() imageUrl: string = '';
  @Input() color: string = '';
  @Input() titlePadding: number = 0;


  ngOnInit(): void {
    document.documentElement.style.setProperty('--title-font-size', this.titleFontSize + 'px');  
    document.documentElement.style.setProperty('--title-font-size-screen', this.titleFontSizeScreen + 'px');   
    document.documentElement.style.setProperty('--title-padding', this.titlePadding + 'px');   
 
  }

}
