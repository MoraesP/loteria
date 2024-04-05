import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorJogoLotoComponent } from './gerador-jogo-loto.component';

describe('GeradorJogoLotoComponent', () => {
  let component: GeradorJogoLotoComponent;
  let fixture: ComponentFixture<GeradorJogoLotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeradorJogoLotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeradorJogoLotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
