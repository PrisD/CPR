import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnFootComponent } from './turn-foot.component';

describe('TurnFootComponent', () => {
  let component: TurnFootComponent;
  let fixture: ComponentFixture<TurnFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnFootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurnFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
