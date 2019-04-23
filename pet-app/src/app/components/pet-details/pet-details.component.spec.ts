import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailsComponent } from './pet-details.component';
import { ShowPetsComponent } from '../show-pets/show-pets.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PetDetailsComponent', () => {
  let component: PetDetailsComponent;
  let fixture: ComponentFixture<PetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDetailsComponent, ShowPetsComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
