import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { Master } from '../models/Master/master';
import { Pet } from '../models/Pet/pet';
import { environment } from '../../environments/environment';

describe('DataService', () => {
  let injector: TestBed;
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    injector = getTestBed();
    service = injector.get(DataService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Should get master lists', () => {
    const mockMasters: Master[] = [
      {
        name: 'Ram',
        gender: 'Male',
        age: 30,
        pets: [
          { name: 'Alpha', type: 'Dog' },
          { name: 'Beta', type: 'Cat' },
          { name: 'Gamma', type: 'Dog' },
        ]
      },
      {
        name: 'Srimanti',
        gender: 'Female',
        age: 30,
        pets: [
          { name: 'Rambo', type: 'Dog' },
          { name: 'kityy', type: 'Cat' },
        ]
      }
    ];

    service
      .getPetOwners()
      .subscribe((masters: Master[]) => {
        expect(masters).toBe(mockMasters);
      });

    const mockReq = httpMock.expectOne(environment.apiUrl);

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockMasters);
  });

  
  it('Should fetch different pet by provided pet-type and gender', () => {
    const mockMasters: Master[] = [
      {
        name: 'Ram',
        gender: 'Male',
        age: 30,
        pets: [
          { name: 'Alpha', type: 'Dog' },
          { name: 'Beta', type: 'Cat' },
          { name: 'Gamma', type: 'Dog' },
        ]
      },
      {
        name: 'Srimanti',
        gender: 'Female',
        age: 30,
        pets: [
          { name: 'Rambo', type: 'Dog' },
          { name: 'kityy', type: 'Cat' },
        ]
      },
      {
        name: 'Debu',
        gender: 'Male',
        age: 25,
        pets: [
          { name: 'Doggy', type: 'Dog' },
          { name: 'Kitten', type: 'Cat' },
        ]
      }
    ];

    const maleOwnedDogs: string[] = [
      'Alpha',
      'Gamma',
      'Doggy',
    ];

    const femaleOwnedCats: string[] = [
      'kityy'
    ];

    service
      .getPetOwners()
      .subscribe((masters: Master[]) => {
        // Cats of Male Owners Are Sorted Alphabetically
        const maleOwnedDogsResult = service
          .sortPetsByOwner(masters, 'Male', 'Dog')
          .map((pet: Pet) => pet.name);
        expect(maleOwnedDogsResult).toEqual(maleOwnedDogs);

        // Cats of Female Owners Are Sorted Alphabetically
        const femaleOwnedCatsResult = service
          .sortPetsByOwner(masters, 'Female', 'Cat')
          .map((pet: Pet) => pet.name);
        expect(femaleOwnedCatsResult).toEqual(femaleOwnedCats);
      });

    const mockReq = httpMock.expectOne(environment.apiUrl);
    mockReq.flush(mockMasters);
  }); 
});
