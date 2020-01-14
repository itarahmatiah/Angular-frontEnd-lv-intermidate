import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTransaksiSatuComponent } from './sub-transaksi-satu.component';

describe('SubTransaksiSatuComponent', () => {
  let component: SubTransaksiSatuComponent;
  let fixture: ComponentFixture<SubTransaksiSatuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTransaksiSatuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTransaksiSatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
