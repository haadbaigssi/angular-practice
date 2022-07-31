import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisedInputComponent } from './customised-input.component';

describe('CustomisedInputComponent', () => {
  let component: CustomisedInputComponent;
  let fixture: ComponentFixture<CustomisedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomisedInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomisedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
