import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcreateComponent } from './ecreate.component';

describe('EcreateComponent', () => {
  let component: EcreateComponent;
  let fixture: ComponentFixture<EcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
