import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogguardGuard } from 'gurds/logguard.guard';
import { DashcompComponent } from './dashcomp/dashcomp.component';

// import { LogguardGuard } from './login/Guards/logguard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login',
component:LoginComponent,
// canActivate:[LogguardGuard]
},
{
path:'registation',
component:RegisterComponent,
// canActivate:[LogguardGuard]
// canActivateChild:[LogguardGuard]
},
{path:'login/registation',
component:RegisterComponent,

},
{
  path:"",
  component:DashcompComponent,
  canActivate:[LogguardGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
