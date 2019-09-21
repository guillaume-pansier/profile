import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { ProfileService } from './event.service';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ProfileService]
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));
});
