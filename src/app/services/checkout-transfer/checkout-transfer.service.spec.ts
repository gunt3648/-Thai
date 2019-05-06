import { TestBed } from '@angular/core/testing';

import { CheckoutTransferService } from './checkout-transfer.service';

describe('CheckoutTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckoutTransferService = TestBed.get(CheckoutTransferService);
    expect(service).toBeTruthy();
  });
});
