import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFilterComponent } from './password-filter.component';

describe('PasswordFilterComponent', () => {
  let component: PasswordFilterComponent;
  let fixture: ComponentFixture<PasswordFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
