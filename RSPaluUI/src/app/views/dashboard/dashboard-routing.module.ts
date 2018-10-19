import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PendaftaranPasienLamaComponent } from './pendaftaran-pasien-lama/pendaftaran-pasien-lama.component';
import { PendaftaranPasienBaruComponent } from './pendaftaran-pasien-baru/pendaftaran-pasien-baru.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard'
    },
    children: [{
      path: '',
      component: DashboardComponent,
      data: {
        title: ''
      }
    },
    {
      path: 'pasien-lama',
      component: PendaftaranPasienLamaComponent,
      data: {
        title: 'Pendaftaran Pasien Lama'
      }
    },
    {
      path: 'pasien-baru',
      component: PendaftaranPasienBaruComponent,
      data: {
        title: 'Pendaftaran Pasien Baru'
      }
    },
    {
      path: 'edit/:id',
      component: PendaftaranPasienBaruComponent,
      data: {
        title: 'Edit Pasien'
      }
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
