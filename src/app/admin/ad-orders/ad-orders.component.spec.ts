import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdOrdersComponent } from './ad-orders.component';

describe('AdOrdersComponent', () => {
  let component: AdOrdersComponent;
  let fixture: ComponentFixture<AdOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdOrdersComponent]
    });
    fixture = TestBed.createComponent(AdOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
