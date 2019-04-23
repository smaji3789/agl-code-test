import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../../models/pet/pet'

@Component({
  selector: 'app-show-pets',
  templateUrl: './show-pets.component.html',
  styleUrls: ['./show-pets.component.css']
})
export class ShowPetsComponent implements OnInit {
  @Input() pets: Pet[];

  constructor() { }

  ngOnInit() {
  }

}
