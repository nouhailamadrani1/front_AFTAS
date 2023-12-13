// level-list.component.ts

import { Component, OnInit } from '@angular/core';
import { LevelService } from '../../../services/level.service';
import { Level } from '../../../models/level.model';

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.css']
})
export class LevelListComponent implements OnInit {
  levels: Level[] = [];

  constructor(private levelService: LevelService) {}

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

  viewLevel(code: number): void {
    console.log(`View level with code ${code}`);
    // Implement the view functionality as needed
  }

  editLevel(code: number): void {
    console.log(`Delete level with code ${code}`);
  }
  deleteLevel(code: number): void {
    this.levelService.deleteLevel(code).subscribe(
      () => {
        console.log(`level with code ${code} deleted successfully.`);
       
        this.loadLevels();
      },
      (error) => {
        console.error(`Error deleting level with code ${code}:`, error);
      }
    );
  }
}