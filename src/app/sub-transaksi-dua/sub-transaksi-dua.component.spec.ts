import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTransaksiDuaComponent } from './sub-transaksi-dua.component';

describe('SubTransaksiDuaComponent', () => {
  let component: SubTransaksiDuaComponent;
  let fixture: ComponentFixture<SubTransaksiDuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTransaksiDuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTransaksiDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
