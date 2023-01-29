import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDeleteConfirmComponent } from './document-delete-confirm.component';

describe('DocumentDeleteConfirmComponent', () => {
  let component: DocumentDeleteConfirmComponent;
  let fixture: ComponentFixture<DocumentDeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentDeleteConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
