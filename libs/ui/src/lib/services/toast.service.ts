import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { NbToastrConfig } from '@nebular/theme/components/toastr/toastr-config';
import { NbToastRef } from '@nebular/theme/components/toastr/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public constructor(private toastrService: NbToastrService) {}

  public success(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef {
    return this.toastrService.success(message, title, { ...config });
  }

  public danger(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef {
    return this.toastrService.danger(message, title, {
      destroyByClick: true,
      ...config
    });
  }

  public warning(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef {
    return this.toastrService.warning(message, title, { ...config });
  }

  public info(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef {
    return this.toastrService.info(message, title, { ...config });
  }
}
