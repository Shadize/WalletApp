import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDeleteConfirmComponent } from './salary-delete-confirm.component';

describe('SalaryDeleteConfirmComponent', () => {
  let component: SalaryDeleteConfirmComponent;
  let fixture: ComponentFixture<SalaryDeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryDeleteConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
