import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimesheetDialogComponent } from './edit-timesheet-dialog.component';

describe('EditTimesheetDialogComponent', () => {
  let component: EditTimesheetDialogComponent;
  let fixture: ComponentFixture<EditTimesheetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimesheetDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTimesheetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
