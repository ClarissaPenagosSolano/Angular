import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListencargComponent } from './listencarg.component';

describe('ListencargComponent', () => {
  let component: ListencargComponent;
  let fixture: ComponentFixture<ListencargComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListencargComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListencargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
