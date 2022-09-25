import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCardItemComponent } from './password-card-item.component';

describe('PasswordCardItemComponent', () => {
  let component: PasswordCardItemComponent;
  let fixture: ComponentFixture<PasswordCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
