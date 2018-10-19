import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  dt

  constructor(private router:Router) {
    this.dt = new Date();
   }

  pembayaran:any = [
    { 
      id:1,
      name:'UMUM'
    },
    { 
      id:2,
      name:'ASKES'
    },
    { 
      id:3,
      name:'JAMKESMAS'
    },
    { 
      id:4,
      name:'JAMPERSAL'
    },
    { 
      id:5,
      name:'LAIN LAIN'
    },
  ]

  poliklinik:any = [
    { 
      id:1,
      name:'Poli Gigi'
    },
    { 
      id:2,
      name:'Poli Umum'
    },
    { 
      id:3,
      name:'Poli KIA'
    },
  ]

  asalPasien:any = [
    { 
      id:1,
      name:'DATANG SENDIRI'
    },
    { 
      id:2,
      name:'PUSKESMAS'
    },
    { 
      id:3,
      name:'RUMAH SAKIT'
    },
    { 
      id:3,
      name:'LAIN LAIN'
    },
  ]

  ngOnInit(): void {
    
  }

  baru(){
    this.router.navigate(['dashboard/pasien-baru'])
  }
  lama(){
    this.router.navigate(['dashboard/pasien-lama'])
  }
}
