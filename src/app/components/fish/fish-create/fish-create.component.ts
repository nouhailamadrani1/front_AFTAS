// fish-create.component.ts

import { Component, OnInit } from '@angular/core';
import { FishService } from '../../../services/fish.service';
import { Fish } from '../../../models/fish.model';
import { Level } from '../../../models/level.model';
import { LevelService } from '../../../services/level.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fish-create',
  templateUrl: './fish-create.component.html',
  styleUrls: ['./fish-create.component.css']
})
export class FishCreateComponent implements OnInit {
  newFish: Fish = {
    id: 0,
    name: '',
    averageWeight: 0,
    level: {
      id: 0, // Initialize level.id
      code: 0,
      description: '',
      points: 0
    }
  };
  levels: Level[] = [];

  constructor(
    private fishService: FishService,
    private levelService: LevelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLevels();
  }

  loadLevels(): void {
    this.levelService.getAllLevels().subscribe(
      (levels) => {
        this.levels = levels;
      },
      (error) => {
        console.error('Error loading levels:', error);
      }
    );
  }

  createFish(): void {
    console.log('newFish:', this.newFish);
    this.fishService.saveFish(this.newFish).subscribe(
      (createdFish) => {
        console.log('Fish created successfully:', createdFish);
        this.router.navigate(['/fishes']);
      },
      (error) => {
        console.error('Error creating fish:', error);
      }
    );
  }
}
