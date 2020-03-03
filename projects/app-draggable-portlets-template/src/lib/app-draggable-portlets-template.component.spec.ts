import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDraggablePortletsTemplateComponent } from './app-draggable-portlets-template.component';

describe('AppDraggablePortletsTemplateComponent', () => {
  let component: AppDraggablePortletsTemplateComponent;
  let fixture: ComponentFixture<AppDraggablePortletsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDraggablePortletsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDraggablePortletsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
