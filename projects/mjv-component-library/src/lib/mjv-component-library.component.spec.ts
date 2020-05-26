import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjvComponentLibraryComponent } from './mjv-component-library.component';

describe('MjvComponentLibraryComponent', () => {
  let component: MjvComponentLibraryComponent;
  let fixture: ComponentFixture<MjvComponentLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjvComponentLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjvComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
