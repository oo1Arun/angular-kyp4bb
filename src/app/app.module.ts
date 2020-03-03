import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// for Router import:
import { AuthGuard } from '../@akt/services/auth/auth.guard';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { PagesModule } from './pages/pages.module';
import { AktModule } from '../@akt/@akt.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    PagesModule,
    AktModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
