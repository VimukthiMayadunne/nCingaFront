import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlistComponent } from './ilist.component';

describe('IlistComponent', () => {
  let component: IlistComponent;
  let fixture: ComponentFixture<IlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
