import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPortletsComponent } from './load-portlets.component';

describe('LoadPortletsComponent', () => {
  let component: LoadPortletsComponent;
  let fixture: ComponentFixture<LoadPortletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadPortletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPortletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
