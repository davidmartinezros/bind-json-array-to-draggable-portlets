import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortletsGroupComponent } from './portlets-group.component';

describe('PortletsGroupComponent', () => {
  let component: PortletsGroupComponent;
  let fixture: ComponentFixture<PortletsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortletsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortletsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
