import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetFieldPrefabComponent } from './fleet-field-prefab.component';

describe('FleetFieldPrefabComponent', () => {
  let component: FleetFieldPrefabComponent;
  let fixture: ComponentFixture<FleetFieldPrefabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetFieldPrefabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetFieldPrefabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
