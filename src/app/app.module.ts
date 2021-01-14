import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiInterceptor} from './core/api.interceptor';
import {SharedModule} from './shared/shared.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackComponent } from './snack/snack.component';


@NgModule({
  declarations: [
    AppComponent,
    SnackComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSnackBarModule,
  ],
  entryComponents:[
    SnackComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
