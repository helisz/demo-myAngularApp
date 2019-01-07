console.log("I am entry point of BABAYA");
// Now that our basic module is ready, let’s invoke it from src/main.ts:

import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);