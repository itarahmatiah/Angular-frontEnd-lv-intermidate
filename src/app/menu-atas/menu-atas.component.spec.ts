import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAtasComponent } from './menu-atas.component';

describe('MenuAtasComponent', () => {
  let component: MenuAtasComponent;
  let fixture: ComponentFixture<MenuAtasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAtasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
