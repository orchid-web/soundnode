import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TrackvueComponent } from './trackvue/trackvue.component';
import { HeaderComponent } from './header/header.component';

import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MenuComponent } from './menu/menu.component';
import { LikesComponent } from './likes/likes.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { StreamComponent } from './stream/stream.component';

@NgModule({
  declarations: [
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
    FormsModule,
    FontAwesomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
