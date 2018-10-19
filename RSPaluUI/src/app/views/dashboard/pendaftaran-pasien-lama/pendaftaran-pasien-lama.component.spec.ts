import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranPasienLamaComponent } from './pendaftaran-pasien-lama.component';

describe('PendaftaranPasienLamaComponent', () => {
  let component: PendaftaranPasienLamaComponent;
  let fixture: ComponentFixture<PendaftaranPasienLamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranPasienLamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranPasienLamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
