import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemllistComponent } from './itemllist.component';

describe('ItemllistComponent', () => {
  let component: ItemllistComponent;
  let fixture: ComponentFixture<ItemllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemllistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
