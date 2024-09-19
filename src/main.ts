import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerDispatcher } from '@angular/core/primitives/event-dispatch';
import { registerLocaleData } from '@angular/common';
import * as fr from "@angular/common/locales/fr"

registerLocaleData(fr.default);


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
