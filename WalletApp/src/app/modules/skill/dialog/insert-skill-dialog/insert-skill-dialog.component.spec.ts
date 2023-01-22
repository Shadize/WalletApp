import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSkillDialogComponent } from './insert-skill-dialog.component';

describe('InsertSkillDialogComponent', () => {
  let component: InsertSkillDialogComponent;
  let fixture: ComponentFixture<InsertSkillDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSkillDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSkillDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
