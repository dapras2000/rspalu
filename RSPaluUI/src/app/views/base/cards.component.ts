import { Component } from '@angular/core';

@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent {

  dataKamar: any = [
    {
      no: 1, Nama: 'Elang', Kelas: 'II', Ruang: 'Penyakit Dalam' 
    },
    {
      no: 2, Nama: 'Rajawali', Kelas: 'II', Ruang: 'Penyakit Dalam'
    }
  ]
  jumlahTempatTidur: any = [
    {
      kamar:
        [
          { id: 1, status: false }, { id: 2, status: true }, { id: 3, status: false }
        ]
    },
    {
      kamar:
        [
          { id: 1, status: false }, { id: 2, status: true }, { id: 3, status: false }
        ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  back(){
    window.history.back()
  }

}
