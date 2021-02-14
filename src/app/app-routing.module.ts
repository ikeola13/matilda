import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskComponent } from './ask/ask.component';
import { CongratsComponent } from './congrats/congrats.component';

const routes: Routes = [
  { path: '', component: AskComponent },
  { path: 'ask', component: AskComponent },
  { path: 'congrats', component:  CongratsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
