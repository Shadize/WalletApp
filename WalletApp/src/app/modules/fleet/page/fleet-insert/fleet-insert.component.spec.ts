import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetInsertComponent } from './fleet-insert.component';

describe('FleetInsertComponent', () => {
  let component: FleetInsertComponent;
  let fixture: ComponentFixture<FleetInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
