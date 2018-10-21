import { Component, OnInit } from '@angular/core';
import { DataContainerService } from '../data-container.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rawat-inap',
  templateUrl: './rawat-inap.component.html'
})
export class RawatInapComponent implements OnInit {

  constructor(private transporter:DataContainerService,private router:Router,private actRoute:ActivatedRoute) { }

  pasien:any={id:0,nama:'',alamat:'',jenisPembayaran:'',tglMasuk:'1-1-2001',tglPindah:'1-1-2001',namaRuang:'',noBed:0,Admin:''}
formRawatInap:any=[
  {id:1,name:'Perjalanan Penyakit / Intruksi Dokter'},{id:2,name:'Daftar Permintaan Makanan Pasien'},{id:3,name:'Order Kamar Operasi'},{id:4,name:'Resume Pulang'},{id:5,name:'Daftar Pemberian Obat'},{id:6,name:'Resume Media'},

]

  ngOnInit() {
    this.pasien = this.transporter.containerData
  }

  submit(id){
    this.router.navigate(['/theme/typography'])
  }

}
