import { TestBed } from '@angular/core/testing';
import { UiModule } from '@aquascape-diary/ui';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [UiModule] }));

  it('should be created', () => {
    const service: ToastService = TestBed.get(ToastService);
    expect(service).toBeTruthy();
  });
});
