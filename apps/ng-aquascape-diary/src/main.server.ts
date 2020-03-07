import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (typeof localStorage === 'undefined' || localStorage === null) {
  const LocalStorage = require('node-localstorage').LocalStorage;
  global['localStorage'] = new LocalStorage('./scratch');
}

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';

export { renderModule, renderModuleFactory } from '@angular/platform-server';
