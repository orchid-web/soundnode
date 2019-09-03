import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { TrackvueComponent } from './trackvue/trackvue.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { LikesComponent } from './likes/likes.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { StreamComponent } from './stream/stream.component';
import { DataService } from './data.service';

const routes: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'create', component: LoginComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LoginComponent,
    TrackvueComponent,
    AppComponent,
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
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
