import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { createErrorHandler, TraceService } from '@sentry/angular-ivy';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: ErrorHandler,
      useValue: createErrorHandler({
        showDialog: false,
        logErrors: true
      })
    },
  ]
};
