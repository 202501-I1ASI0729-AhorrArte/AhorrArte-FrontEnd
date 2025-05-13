import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecomendationComponent } from './app-recomendation.component';

describe('AppRecomendationComponent', () => {
  let component: AppRecomendationComponent;
  let fixture: ComponentFixture<AppRecomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRecomendationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
