import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCardFormComponent } from './password-card-form.component';

describe('PasswordCardFormComponent', () => {
  let component: PasswordCardFormComponent;
  let fixture: ComponentFixture<PasswordCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
