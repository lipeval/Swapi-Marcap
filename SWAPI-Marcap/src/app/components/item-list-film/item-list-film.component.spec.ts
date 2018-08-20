import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListFilmComponent } from './item-list-film.component';

describe('ItemListFilmComponent', () => {
  let component: ItemListFilmComponent;
  let fixture: ComponentFixture<ItemListFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListFilmComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
