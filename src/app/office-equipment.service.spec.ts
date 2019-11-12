import { TestBed } from '@angular/core/testing';

import { OfficeEquipmentService } from './office-equipment.service';

describe('OfficeEquipmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfficeEquipmentService = TestBed.get(OfficeEquipmentService);
    expect(service).toBeTruthy();
  });
});
