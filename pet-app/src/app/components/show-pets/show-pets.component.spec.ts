import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPetsComponent } from './show-pets.component';
import { Pet } from '../../models/pet/pet';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ShowPetsComponent', () => {
  let component: ShowPetsComponent;
  let fixture: ComponentFixture<ShowPetsComponent>;
  let listEl: DebugElement;

  const petsData: Pet[] = [
    { name: 'Alpha', type: 'Dog' },
    { name: 'Beta', type: 'Dog' },
    { name: 'Gamma', type: 'Cat' }
  ];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    listEl = fixture.debugElement.query(By.css('ul'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show pet names', () => {
    component.pets = petsData;
    fixture.detectChanges();

    // Check if list elements are properly created and have specified names
    expect(listEl.nativeElement.children[0].innerHTML).toBe(petsData[0].name);
    expect(listEl.nativeElement.children[1].innerHTML).toBe(petsData[1].name);
    expect(listEl.nativeElement.children[2].innerHTML).toBe(petsData[2].name);
  });
});
