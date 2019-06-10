import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { GlobalConfig } from './services/GlobalConfig'
import { UserService } from './services/user.service'
import { appRoutes } from './routes'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AuthGuard} from '../app/auth/auth.guard';
import { AppPagesComponent } from './app-pages/app-pages.component';
import { ProfileComponent } from './app-pages/profile/profile.component';
import { ContactsComponent } from './app-pages/contacts/contacts.component'
import { HomeComponent } from './app-pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    AppPagesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GlobalConfig,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
