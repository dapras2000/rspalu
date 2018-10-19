import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendaftaran-pasien-baru',
  templateUrl: './pendaftaran-pasien-baru.component.html',
  styleUrls: ['./pendaftaran-pasien-baru.component.scss']
})
export class PendaftaranPasienBaruComponent implements OnInit {

  dt

  jenisKelamin: any = [
    { id: 1, name: 'pria' }, { id: 2, name: 'wanita' }
  ]

  statusPerkawinan: any = [
    { name: 'Belum Kawin' }, { name: 'Kawin' }, { name: 'Janda / Duda' }
  ]

  Religions: any = [
    { name: 'Islam' }, { name: 'Kristen' }, { name: 'Katholik' }, { name: 'Hindu' }, { name: 'Budha' }, { name: 'Konghuchu' }
  ]



  constructor(private router: Router) {
    this.dt = new Date();
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['dashboard'])
  }

}
