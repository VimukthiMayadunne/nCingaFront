import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcreateComponent } from './icreate.component';

describe('IcreateComponent', () => {
  let component: IcreateComponent;
  let fixture: ComponentFixture<IcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
