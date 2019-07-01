import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';

import { SharedModule } from '../shared/shared.module';
import { AdminConsoleComponent } from './components/admin-console/admin-console.component';
import { CastingFormComponent } from './components/casting-form/casting-form.component';
import { ManageCastingComponent } from './components/manage-casting/manage-casting.component';
import { TableFormComponent } from './components/table-form/table-form.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';



@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminConsoleComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/casting/:id',
        component: CastingFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/casting',
        component: ManageCastingComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/tables/:id',
        component: TableFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/tab;es',
        component: TableListComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      }
    ])
  ],
  declarations: [
    AdminConsoleComponent,
    CastingFormComponent,
    ManageCastingComponent,
    TableListComponent,
    TableFormComponent
  ],
  entryComponents: [
    TableFormComponent
  ],
})
export class AdminModule { }
