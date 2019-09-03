import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { TrackvueComponent } from './trackvue/trackvue.component';
import { HeaderComponent } from './header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MenuComponent } from './menu/menu.component';
import { LikesComponent } from './likes/likes.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { StreamComponent } from './stream/stream.component';

const routes:Routes = [
  {path:'signIn', component:SignInComponent},
  {path:'create', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LoginComponent,
    TrackvueComponent,
    HeaderComponent,
    MenuComponent,
    LikesComponent,
    PlaylistsComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
