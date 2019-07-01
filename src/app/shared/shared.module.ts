import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastaModule } from 'ngx-toasta';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CastingService } from './services/casting.service';
import { GeneratorService } from './services/generator.service';
import { ToastService } from './services/toast.service';
import { UserService } from './services/user.service';








@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ToastaModule.forRoot(),
    NgbModule,
    RouterModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    NgxDatatableModule
  ],
  declarations: [

  ],
  exports: [
    ToastaModule,
    FormsModule,
    NgbModule,
    AngularFireFunctionsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxDatatableModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    CastingService,
    GeneratorService,
    ToastService,
    UserService
  ]
})
export class SharedModule { }
