import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTimesheetDialogComponent } from './insert-timesheet-dialog.component';

describe('InsertTimesheetDialogComponent', () => {
  let component: InsertTimesheetDialogComponent;
  let fixture: ComponentFixture<InsertTimesheetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTimesheetDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTimesheetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
