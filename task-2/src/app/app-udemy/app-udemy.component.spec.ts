import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUdemyComponent } from './app-udemy.component';

describe('AppUdemyComponent', () => {
  let component: AppUdemyComponent;
  let fixture: ComponentFixture<AppUdemyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppUdemyComponent]
    });
    fixture = TestBed.createComponent(AppUdemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
