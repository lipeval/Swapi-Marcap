import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListPlanetComponent } from './item-list-planet.component';

describe('ItemListPlanetComponent', () => {
  let component: ItemListPlanetComponent;
  let fixture: ComponentFixture<ItemListPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListPlanetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
