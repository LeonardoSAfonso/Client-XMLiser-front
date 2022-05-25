import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientBirthdayComponent } from './client/client-birthday/client-birthday.component';
import { ClientTotalComponent } from './client/client-total/client-total.component';
import { ClientImportComponent } from './client/client-import/client-import.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    LoginComponent,
    ClientBirthdayComponent,
    ClientTotalComponent,
    ClientImportComponent,
    ClientCreateComponent,
    ClientEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
