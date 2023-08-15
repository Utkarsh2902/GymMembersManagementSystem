import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { MemberSignupComponent } from './member-signup/member-signup.component';
const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'dashboard',component:MemberDashboardComponent},
  {path:'signup',component:MemberSignupComponent},
  {path:'login',component:MemberLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
