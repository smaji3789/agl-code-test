import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Pet } from 'src/app/models/pet/pet';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  petsOwnedByMale: Pet[] = [];
  petsOwnedByFemales: Pet[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
