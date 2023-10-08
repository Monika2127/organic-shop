import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProductsComponent } from './ad-products.component';

describe('AdProductsComponent', () => {
  let component: AdProductsComponent;
  let fixture: ComponentFixture<AdProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdProductsComponent]
    });
    fixture = TestBed.createComponent(AdProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
