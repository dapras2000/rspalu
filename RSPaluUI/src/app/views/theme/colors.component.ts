import { Component, OnInit } from '@angular/core';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {

  private _dt;
  public get dt() {
    return this._dt;
  }
  public set dt(value) {
    this._dt = value;
  }
  patients: any = [
    { id: 1, name: 'a', tglLhr: 1, alamat: 'aceh', ktp: 10001, jk: 'pria', telp: 81001, tglDftr: 1 },
    { id: 2, name: 'b', tglLhr: 2, alamat: 'banten', ktp: 10002, jk: 'wanita', telp: 81002, tglDftr: 2 },
    { id: 3, name: 'c', tglLhr: 3, alamat: 'cirebon', ktp: 10003, jk: 'pria', telp: 81003, tglDftr: 3 },
    { id: 4, name: 'd', tglLhr: 4, alamat: 'demak', ktp: 10004, jk: 'pria', telp: 81004, tglDftr: 4 },
    { id: 5, name: 'e', tglLhr: 5, alamat: 'enim', ktp: 10005, jk: 'wanita', telp: 81005, tglDftr: 5 },
    { id: 6, name: 'f', tglLhr: 6, alamat: 'fukuoka', ktp: 10006, jk: 'pria', telp: 81006, tglDftr: 6 }
  ]
  constructor(private router: Router) {
    this.dt = new Date();
  }

  ngOnInit(): void {

  }

  edit(id){
    this.router.navigate(['/dashboard/edit/'+id])
  }
}
