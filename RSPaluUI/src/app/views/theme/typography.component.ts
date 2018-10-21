import { DataContainerService } from './data-container.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'typography.component.html'
})
export class TypographyComponent {

  constructor(private router:Router, private transporter: DataContainerService) { }

  rawatInapPasien:any = [
    {id:10001,nama:'Asmi',alamat:'aceh',jenisPembayaran:'Askes',tglMasuk:'1-1-2001',tglPindah:'1-1-2001',namaRuang:'GARUDA',noBed:1,Admin:'Adi'},
    {id:10002,nama:'Bima',alamat:'banten',jenisPembayaran:'Askes',tglMasuk:'1-1-2001',tglPindah:'1-1-2001',namaRuang:'MERPATI',noBed:1,Admin:'Badi'},
    {id:10003,nama:'Candra',alamat:'bandung',jenisPembayaran:'Askes',tglMasuk:'1-1-2001',tglPindah:'1-1-2001',namaRuang:'PERKUTUT',noBed:1,Admin:'Cadi'},
    {id:10004,nama:'Didi',alamat:'cirebon',jenisPembayaran:'Askes',tglMasuk:'1-1-2001',tglPindah:'1-1-2001',namaRuang:'MERAK',noBed:1,Admin:'Dadi'},
    {id:10005,nama:'Eni',alamat:'demak',jenisPembayaran:'Askes',tglMasuk:'1-1-2001',tglPindah:'1-1-2001',namaRuang:'CENDRAWASIH',noBed:1,Admin:'Edi'},    
  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  proses(pasien){
    debugger
    this.transporter.containerData = pasien
    this.router.navigate(['theme/rawat-inap/'+ pasien.id])
  }

}
