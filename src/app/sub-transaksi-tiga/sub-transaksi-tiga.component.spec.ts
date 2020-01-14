import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTransaksiTigaComponent } from './sub-transaksi-tiga.component';

describe('SubTransaksiTigaComponent', () => {
  let component: SubTransaksiTigaComponent;
  let fixture: ComponentFixture<SubTransaksiTigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTransaksiTigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTransaksiTigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
