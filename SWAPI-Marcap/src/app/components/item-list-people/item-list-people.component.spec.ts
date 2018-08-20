import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListPeopleComponent } from './item-list-people.component';

describe('ItemListPeopleComponent', () => {
  let component: ItemListPeopleComponent;
  let fixture: ComponentFixture<ItemListPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListPeopleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
