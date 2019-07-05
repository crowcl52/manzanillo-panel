import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCotizacionesComponent } from './client-cotizaciones.component';

describe('ClientCotizacionesComponent', () => {
  let component: ClientCotizacionesComponent;
  let fixture: ComponentFixture<ClientCotizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCotizacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
