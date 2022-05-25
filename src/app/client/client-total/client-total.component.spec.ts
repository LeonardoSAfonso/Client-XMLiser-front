import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTotalComponent } from './client-total.component';

describe('ClientTotalComponent', () => {
  let component: ClientTotalComponent;
  let fixture: ComponentFixture<ClientTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
