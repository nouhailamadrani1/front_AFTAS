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

  constructor(private levelService: LevelService) { }

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

  viewLevel(id: number): void {
    console.log(`View level with code ${id}`);

  }

  editLevel(id: number): void {
    console.log(`Delete level with code ${id}`);
  }

  deleteLevel(id: number): void {
    this.levelService.deleteLevel(id).subscribe(
      () => {
        console.log(`level with code ${id} deleted successfully.`);
        this.loadLevels();
      },
      (error) => {
        console.error(`Error deleting level with code ${id}:`, error);
      }
    );
  }
}