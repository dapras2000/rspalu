import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PendaftaranPasienBaruComponent } from './pendaftaran-pasien-baru/pendaftaran-pasien-baru.component';
import { PendaftaranPasienLamaComponent } from './pendaftaran-pasien-lama/pendaftaran-pasien-lama.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent, PendaftaranPasienBaruComponent, PendaftaranPasienLamaComponent ]
})
export class DashboardModule { }
