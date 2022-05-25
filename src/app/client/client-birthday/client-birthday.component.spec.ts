import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBirthdayComponent } from './client-birthday.component';

describe('ClientBirthdayComponent', () => {
  let component: ClientBirthdayComponent;
  let fixture: ComponentFixture<ClientBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBirthdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
