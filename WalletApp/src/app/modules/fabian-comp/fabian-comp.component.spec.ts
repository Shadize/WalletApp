import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabianCompComponent } from './fabian-comp.component';

describe('FabianCompComponent', () => {
  let component: FabianCompComponent;
  let fixture: ComponentFixture<FabianCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabianCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabianCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
