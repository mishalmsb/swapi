import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconByTypeComponent } from './icon-by-type.component';

describe('IconByTypeComponent', () => {
  let component: IconByTypeComponent;
  let fixture: ComponentFixture<IconByTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconByTypeComponent]
    });
    fixture = TestBed.createComponent(IconByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
