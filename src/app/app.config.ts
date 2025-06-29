import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// ✅ Import your NavbarComponent
import { NavbarComponent } from './components/navbar/navbar';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NavbarComponent) 
  ]
};
