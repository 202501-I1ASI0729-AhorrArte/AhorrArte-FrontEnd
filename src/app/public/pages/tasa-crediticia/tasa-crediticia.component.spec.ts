import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasaCrediticiaComponent } from './tasa-crediticia.component';

describe('TasaCrediticiaComponent', () => {
  let component: TasaCrediticiaComponent;
  let fixture: ComponentFixture<TasaCrediticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasaCrediticiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasaCrediticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
