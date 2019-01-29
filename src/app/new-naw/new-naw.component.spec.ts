import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNawComponent } from './new-naw.component';

describe('NewNawComponent', () => {
  let component: NewNawComponent;
  let fixture: ComponentFixture<NewNawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
