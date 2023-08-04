import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavigationButtonsComponent } from './search-navigation-buttons.component';

describe('SearchNavigationButtonsComponent', () => {
  let component: SearchNavigationButtonsComponent;
  let fixture: ComponentFixture<SearchNavigationButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchNavigationButtonsComponent]
    });
    fixture = TestBed.createComponent(SearchNavigationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
