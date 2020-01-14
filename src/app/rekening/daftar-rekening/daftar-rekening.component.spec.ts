import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarRekeningComponent } from './daftar-rekening.component';

describe('DaftarRekeningComponent', () => {
  let component: DaftarRekeningComponent;
  let fixture: ComponentFixture<DaftarRekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarRekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarRekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
