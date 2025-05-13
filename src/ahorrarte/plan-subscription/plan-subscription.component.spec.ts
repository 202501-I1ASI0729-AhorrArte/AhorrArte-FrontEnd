import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSubscriptionComponent } from './plan-subscription.component';

describe('PlanSubscriptionComponent', () => {
  let component: PlanSubscriptionComponent;
  let fixture: ComponentFixture<PlanSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
