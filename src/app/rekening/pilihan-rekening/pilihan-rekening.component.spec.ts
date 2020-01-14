import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilihanRekeningComponent } from './pilihan-rekening.component';

describe('PilihanRekeningComponent', () => {
  let component: PilihanRekeningComponent;
  let fixture: ComponentFixture<PilihanRekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihanRekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilihanRekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
