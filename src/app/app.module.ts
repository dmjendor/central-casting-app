import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { CoreModule } from './core/core.module';
import { GeneratorModule } from './generator/generator.module';
import { SharedModule } from './shared/shared.module';







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminModule,
    CoreModule,
    GeneratorModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      // { path: 'addMessage', component: HomeComponent },
      { path: 'home', component: HomeComponent}
   ], {onSameUrlNavigation: 'reload'})

  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
