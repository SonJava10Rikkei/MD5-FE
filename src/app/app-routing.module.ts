import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./compoment/pages/home/home.component";
import {RegisterComponent} from "./compoment/pages/form-login/register/register.component";
import {LoginComponent} from "./compoment/pages/form-login/login/login.component";
import {DadInputComponent} from "./compoment/input-output/@input/dad-input/dad-input.component";
import {DadOutputComponent} from "./compoment/input-output/@output/dad-output/dad-output.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'input', component: DadInputComponent},
  {path: 'output', component: DadOutputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
