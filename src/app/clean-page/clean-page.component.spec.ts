import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanPageComponent } from './clean-page.component';

describe('CleanPageComponent', () => {
  let component: CleanPageComponent;
  let fixture: ComponentFixture<CleanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
