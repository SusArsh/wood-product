import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOrderComponent } from './for-order.component';

describe('ForOrderComponent', () => {
  let component: ForOrderComponent;
  let fixture: ComponentFixture<ForOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
