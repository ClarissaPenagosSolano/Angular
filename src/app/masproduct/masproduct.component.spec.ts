import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasproductComponent } from './masproduct.component';

describe('MasproductComponent', () => {
  let component: MasproductComponent;
  let fixture: ComponentFixture<MasproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
