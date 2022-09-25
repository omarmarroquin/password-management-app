import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCardListComponent } from './password-card-list.component';

describe('PasswordCardListComponent', () => {
  let component: PasswordCardListComponent;
  let fixture: ComponentFixture<PasswordCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
