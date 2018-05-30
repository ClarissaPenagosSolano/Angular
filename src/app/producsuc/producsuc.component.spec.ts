import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducsucComponent } from './producsuc.component';

describe('ProducsucComponent', () => {
  let component: ProducsucComponent;
  let fixture: ComponentFixture<ProducsucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducsucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducsucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
