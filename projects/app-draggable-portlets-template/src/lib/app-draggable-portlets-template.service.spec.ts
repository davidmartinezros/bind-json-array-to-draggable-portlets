import { TestBed } from '@angular/core/testing';

import { AppDraggablePortletsTemplateService } from './app-draggable-portlets-template.service';

describe('AppDraggablePortletsTemplateService', () => {
  let service: AppDraggablePortletsTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDraggablePortletsTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
