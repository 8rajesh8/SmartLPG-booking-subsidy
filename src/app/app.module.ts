import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RequestSubsidyComponent } from './request-subsidy/request-subsidy.component';
import { GiveupSubsidyComponent } from './giveup-subsidy/giveup-subsidy.component';
// import { SerService } from './subsidy-service/ser.service';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
const routes: Routes = [
  { path: 'giveUp', component: GiveupSubsidyComponent },
  { path: 'request', component: RequestSubsidyComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    RequestSubsidyComponent,
    GiveupSubsidyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
