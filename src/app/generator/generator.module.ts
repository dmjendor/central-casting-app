import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { GenViewComponent } from './components/gen-view/gen-view.component';
import { TableC101Component } from './components/tables/table-c101/table-c101.component';
import { TableC102Component } from './components/tables/table-c102/table-c102.component';
import { TableC103Component } from './components/tables/table-c103/table-c103.component';
import { TableC104Component } from './components/tables/table-c104/table-c104.component';
import { TableC105Component } from './components/tables/table-c105/table-c105.component';
import { TableC106Component } from './components/tables/table-c106/table-c106.component';
import { TableC107Component } from './components/tables/table-c107/table-c107.component';
import { TableC108Component } from './components/tables/table-c108/table-c108.component';
import { TableC109Component } from './components/tables/table-c109/table-c109.component';
import { TableC110Component } from './components/tables/table-c110/table-c110.component';
import { TableC112Component } from './components/tables/table-c112/table-c112.component';
import { TableC114Component } from './components/tables/table-c114/table-c114.component';
import { TableC758Component } from './components/tables/table-c758/table-c758.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      // { path: 'addMessage', component: HomeComponent },
      { path: 'generator', component: GenViewComponent}
  ])
],
  declarations: [GenViewComponent, TableC101Component, TableC102Component, TableC103Component, TableC758Component, TableC104Component, TableC105Component, TableC106Component, TableC107Component, TableC108Component, TableC109Component, TableC110Component, TableC112Component, TableC114Component]
})
export class GeneratorModule { }
