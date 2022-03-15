import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SecurityComponent } from './security/security.component';
import { LoginGuardService } from './login-guard.service';
const routes = [
  { path: 'index', component: IndexComponent },
  { path: '', component: IndexComponent },
  {
    path: 'user-center',
    component: UserCenterComponent,
    canActivate: [LoginGuardService],
    children: [
      { path: 'info', component: InfoComponent },
      { path: 'avatar', component: AvatarComponent },
      { path: 'security', component: SecurityComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserCenterComponent,
    NotFoundComponent,
    InfoComponent,
    AvatarComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
