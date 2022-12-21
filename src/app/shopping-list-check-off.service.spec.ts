import { TestBed } from '@angular/core/testing';

import { ShoppingListCheckOffService } from './shopping-list-check-off.service';

describe('ShoppingListCheckOffService', () => {
  let service: ShoppingListCheckOffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListCheckOffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
