import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { provideHttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
// import { environment } from './environments/environment';
=======
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment.prod';
>>>>>>> 218e07baaf8dcc028b2452da6820359769b369d0


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
