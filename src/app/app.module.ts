import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthService } from './api/auth.service';
import { SaasModule } from './saas/saas.module';
import { NgxStripeModule } from 'ngx-stripe';
import { MatInputModule } from '@angular/material/input';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    SaasModule,
    MatInputModule,
    NgxStripeModule.forRoot('pk_test_iZ43flSMlFzymYq0mMf6k9fR00YY98YxlW')
  ],
  providers: [
    AuthService,
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
