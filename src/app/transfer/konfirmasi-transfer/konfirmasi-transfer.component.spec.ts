import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfirmasiTransferComponent } from './konfirmasi-transfer.component';

describe('KonfirmasiTransferComponent', () => {
  let component: KonfirmasiTransferComponent;
  let fixture: ComponentFixture<KonfirmasiTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonfirmasiTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonfirmasiTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
