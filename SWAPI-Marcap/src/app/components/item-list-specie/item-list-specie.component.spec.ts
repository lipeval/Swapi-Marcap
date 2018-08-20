import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListSpecieComponent } from './item-list-specie.component';

describe('ItemListSpecieComponent', () => {
  let component: ItemListSpecieComponent;
  let fixture: ComponentFixture<ItemListSpecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListSpecieComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
