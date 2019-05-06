import { TestBed } from '@angular/core/testing';

import { ItemTransferService } from './item-transfer.service';

describe('ItemTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemTransferService = TestBed.get(ItemTransferService);
    expect(service).toBeTruthy();
  });
});
