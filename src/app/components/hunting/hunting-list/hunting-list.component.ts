// hunting-list.component.ts

import { Component, OnInit } from '@angular/core';
import { HuntingService } from '../../../services/hunting.service';
import { Hunting } from '../../../models/hunting.model';

@Component({
  selector: 'app-hunting-list',
  templateUrl: './hunting-list.component.html',
  styleUrls: ['./hunting-list.component.css']
})
export class HuntingListComponent implements OnInit {
  huntList: Hunting[] = [];

  constructor(private huntingService: HuntingService) { }

  ngOnInit(): void {
    this.loadHunts();
  }

  loadHunts(): void {
    this.huntingService.getAllHuntings().subscribe(
      hunts => this.huntList = hunts,
      error => console.log(error)
    );
  }

  viewHunt(id: number): void {
    console.log(`View hunting with id ${id}`);
  }

  editHunt(id: number): void {
    console.log(`Edit hunting with id ${id}`);
  }

  
  deleteHunt(id: number): void {
    this.huntingService.deleteHunting(id).subscribe(
      () => {
        console.log(` hunt with code ${id} deleted successfully.`);
       
        this.loadHunts();
      },
      (error) => {
        console.error(`hunt deleting level with code ${id}:`, error);
      }
    );
  }
}
