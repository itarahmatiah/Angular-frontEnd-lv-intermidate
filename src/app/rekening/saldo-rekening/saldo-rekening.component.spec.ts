import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoRekeningComponent } from './saldo-rekening.component';

describe('SaldoRekeningComponent', () => {
  let component: SaldoRekeningComponent;
  let fixture: ComponentFixture<SaldoRekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldoRekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoRekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
