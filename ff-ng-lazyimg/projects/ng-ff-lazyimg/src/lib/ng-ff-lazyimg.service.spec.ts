import { TestBed, inject } from '@angular/core/testing';

import { NgFfLazyimgService } from './ng-ff-lazyimg.service';

describe('NgFfLazyimgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFfLazyimgService]
    });
  });

  it('should be created', inject([NgFfLazyimgService], (service: NgFfLazyimgService) => {
    expect(service).toBeTruthy();
  }));
});
