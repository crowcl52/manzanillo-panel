import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiciosComponent } from './client-servicios.component';

describe('ClientServiciosComponent', () => {
  let component: ClientServiciosComponent;
  let fixture: ComponentFixture<ClientServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
