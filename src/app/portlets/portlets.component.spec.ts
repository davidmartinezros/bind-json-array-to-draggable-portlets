import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortletsComponent } from './portlets.component';

describe('Menu1Component', () => {
  let component: PortletsComponent;
  let fixture: ComponentFixture<PortletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
