import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { PlayComponent } from './play/play.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'home', component:LandingComponent },
  { path:'play', component:PlayComponent },
  { path:'scores', component:ScoresComponent },
  { path:'**',component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
