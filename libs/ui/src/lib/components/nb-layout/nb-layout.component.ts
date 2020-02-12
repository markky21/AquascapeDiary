import { NbOverlayContainerAdapter } from '@nebular/theme';

export class NbOverlayContainerAdapterSub extends NbOverlayContainerAdapter {
  public setContainer(container) {
    this.container = container;
  }
  public clearContainer() {
    // this.container = null;
    // this._containerElement = null;
  }
}
