import { TestBed } from '@angular/core/testing';

import { TranslateappService } from './translateapp.service';

describe('TranslateappService', () => {
  let service: TranslateappService;

  describe("Croc Pipe Image", () => {
    it("should do nothing", () => {
      expect(true).toBeTruthy();
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
