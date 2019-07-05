import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordsComponent } from './dashbords.component';

describe('DashbordsComponent', () => {
  let component: DashbordsComponent;
  let fixture: ComponentFixture<DashbordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
