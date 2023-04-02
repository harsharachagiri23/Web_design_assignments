import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnentnameComponent } from './compnentname.component';

describe('CompnentnameComponent', () => {
  let component: CompnentnameComponent;
  let fixture: ComponentFixture<CompnentnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompnentnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnentnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
