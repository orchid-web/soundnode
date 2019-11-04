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
//DataService fonctionnement via server.js JSON, remplacer par notre API .NET CORE
import { DataService } from './data.service';
import { PlayerComponent } from './player/player.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { FormattimePipe } from './formattime.pipe';
import { PourcentagePipe } from './pourcentage.pipe';
import { ApiService } from './api.service';
const routes:Routes = [
  {path:'', component:StreamComponent},
  {path:'signIn', component:SignInComponent},
  {path:'create', component:LoginComponent},
  {path:'playlists', component:PlaylistsComponent},
  {path:'stream', component:StreamComponent},
  {path:'likes', component:LikesComponent},
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
    StreamComponent,
    PlayerComponent,
    MusicProgressComponent,
    FormattimePipe,
    PourcentagePipe
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
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
