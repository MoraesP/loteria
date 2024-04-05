import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoJogoComponent } from './resultado-jogo.component';

describe('ResultadoJogoComponent', () => {
  let component: ResultadoJogoComponent;
  let fixture: ComponentFixture<ResultadoJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoJogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadoJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
