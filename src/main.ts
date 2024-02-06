import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { provideHttpClient } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment.prod';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
  ],
});
