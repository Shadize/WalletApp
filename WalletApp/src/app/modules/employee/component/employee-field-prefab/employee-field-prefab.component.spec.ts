import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFieldPrefabComponent } from './employee-field-prefab.component';

describe('EmployeeFieldPrefabComponent', () => {
  let component: EmployeeFieldPrefabComponent;
  let fixture: ComponentFixture<EmployeeFieldPrefabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFieldPrefabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFieldPrefabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
