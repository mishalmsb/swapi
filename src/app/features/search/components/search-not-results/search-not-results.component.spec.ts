import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNotResultsComponent } from './search-not-results.component';

describe('SearchNotResultsComponent', () => {
  let component: SearchNotResultsComponent;
  let fixture: ComponentFixture<SearchNotResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchNotResultsComponent]
    });
    fixture = TestBed.createComponent(SearchNotResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
