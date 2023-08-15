import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberSignupComponent } from './member-signup/member-signup.component';
import { MemberLoginComponent } from './member-login/member-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberDashboardComponent,
    MemberSignupComponent,
    MemberLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
