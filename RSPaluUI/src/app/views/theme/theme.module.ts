// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RawatInapComponent } from './rawat-inap/rawat-inap.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeRoutingModule,
    ChartsModule,
    BsDropdownModule,
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    RawatInapComponent
  ]
})
export class ThemeModule { }
