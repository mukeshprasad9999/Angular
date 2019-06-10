import { Routes } from '@angular/router'
import { AppPagesComponent } from './app-pages/app-pages.component';
import { HomeComponent } from './app-pages/home/home.component';
import { ProfileComponent } from './app-pages/profile/profile.component';
import { ContactsComponent } from './app-pages/contacts/contacts.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
 
export const appRoutes: Routes = [
    {
        path: 'home', component: AppPagesComponent,
        children: [{ path: '', component: HomeComponent }],canActivate : [AuthGuard]
    },
    {
        path: 'profile', component: AppPagesComponent,
        children: [{ path: '', component: ProfileComponent }],canActivate : [AuthGuard]
    },
    {
        path: 'contacts', component: AppPagesComponent,
        children: [{ path: '', component: ContactsComponent }],canActivate : [AuthGuard]
    },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];