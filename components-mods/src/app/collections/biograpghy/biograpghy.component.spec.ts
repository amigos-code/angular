import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiograpghyComponent } from './biograpghy.component';

describe('BiograpghyComponent', () => {
  let component: BiograpghyComponent;
  let fixture: ComponentFixture<BiograpghyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiograpghyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiograpghyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
