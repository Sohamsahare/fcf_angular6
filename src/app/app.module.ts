import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './landing/button/button.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { PlayComponent } from './play/play.component';
import { ScoresComponent } from './scores/scores.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LandingComponent,
    NotFoundComponent,
    PlayComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
