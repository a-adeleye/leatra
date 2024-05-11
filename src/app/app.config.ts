import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideServiceWorker} from '@angular/service-worker';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAnalytics, provideAnalytics, ScreenTrackingService} from '@angular/fire/analytics';
import {getFunctions, provideFunctions} from '@angular/fire/functions';
import {environment} from "../environment/environment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
    withInMemoryScrolling({
      scrollPositionRestoration: "top",
    })), provideClientHydration(), provideServiceWorker('ngsw-worker.js', {
    enabled: !isDevMode(),
    registrationStrategy: 'registerWhenStable:30000'
  }), importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    importProvidersFrom(provideAnalytics(() => getAnalytics())),
    ScreenTrackingService,
    importProvidersFrom([BrowserAnimationsModule]),
    importProvidersFrom(provideFunctions(() => getFunctions()))]
};
