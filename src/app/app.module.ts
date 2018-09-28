import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './landing/button/button.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { PlayComponent } from './play/play.component';
import { ScoresComponent } from './scores/scores.component';
import { TimerComponent } from './play/timer/timer.component';
import { HttpClientModule} from '@angular/common/http';
import { ScoresService } from '../services/scores.service';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LandingComponent,
    NotFoundComponent,
    PlayComponent,
    ScoresComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ScoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
