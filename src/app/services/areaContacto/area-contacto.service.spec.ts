import { TestBed } from '@angular/core/testing';

import { AreaContactoService } from './area-contacto.service';

describe('AreaContactoService', () => {
  let service: AreaContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
