import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentDetailsComponent } from './add-department-details.component';

describe('AddDepartmentDetailsComponent', () => {
  let component: AddDepartmentDetailsComponent;
  let fixture: ComponentFixture<AddDepartmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepartmentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
