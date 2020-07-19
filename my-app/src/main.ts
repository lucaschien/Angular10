import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// App 使用哪個 Module 當作應用程式的起點 (提醒不是 router 的進入點)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
