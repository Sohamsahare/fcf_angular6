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
import { ScoreCardService } from '../services/scorecard.service';
import { CardComponent } from './play/card/card.component';
import { TextComponent } from './play/text/text.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LandingComponent,
    NotFoundComponent,
    PlayComponent,
    ScoresComponent,
    TimerComponent,
    CardComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ScoreCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
