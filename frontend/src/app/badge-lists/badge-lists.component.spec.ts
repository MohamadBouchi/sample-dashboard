import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeListsComponent } from './badge-lists.component';

describe('BadgeListsComponent', () => {
  let component: BadgeListsComponent;
  let fixture: ComponentFixture<BadgeListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
