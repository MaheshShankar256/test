import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeEquipmentComponent } from './office-equipment.component';

describe('OfficeEquipmentComponent', () => {
  let component: OfficeEquipmentComponent;
  let fixture: ComponentFixture<OfficeEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
