import { ClientBirthdayComponent } from './client/client-birthday/client-birthday.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { ClientTotalComponent } from './client/client-total/client-total.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientImportComponent } from './client/client-import/client-import.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: '', component: LoginComponent },
  { path: 'client-birthday', component: ClientBirthdayComponent },
  { path: 'client-total', component: ClientTotalComponent },
  { path: 'client-create', component: ClientCreateComponent },
  { path: 'client-import', component: ClientImportComponent },
  { path: 'client-one', component: ClientEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
