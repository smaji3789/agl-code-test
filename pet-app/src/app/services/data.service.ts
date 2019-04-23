import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet/pet';
import { Master } from '../models/master/master';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getPetOwners(): Observable<Master[]> {
    return this.http.get(this.apiUrl) as Observable<Master[]>;
  }

  public sortPetsByOwner(masters: Master[], gender: string, type: string): Pet[] {
    return masters
      .filter((master: Master) => master.gender === gender)
      .reduce((petContainer: Pet[], currentObj: Master) => {
        petContainer.push(...currentObj.pets);
        return petContainer;
      }, [] as Pet[])
      .filter((pet: Pet) => pet.type === type)
      .sort((petObj1: Pet, petObj2: Pet) => petObj1.name.localeCompare(petObj2.name));
  }
}
