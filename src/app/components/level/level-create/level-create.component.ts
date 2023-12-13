// level-create.component.ts
import { Router } from '@angular/router'; // Import Router
import { Component } from '@angular/core';
import { LevelService } from '../../../services/level.service';
import { Level } from '../../../models/level.model';

@Component({
  selector: 'app-level-create',
  templateUrl: './level-create.component.html',
  styleUrls: ['./level-create.component.css']
})
export class LevelCreateComponent {
  newLevel: Level = {
    code:0,
    description: '',
    points: 0
  };

  constructor(private levelService: LevelService, private router: Router) {}

  createLevel(): void {
    this.levelService.saveLevel(this.newLevel).subscribe(
      (createdLevel) => {
        console.log('Level created successfully:', createdLevel);
        // Redirect to the level list or view
      
         this.router.navigate(['/levels']);
      },
      (error) => {
        console.error('Error creating level:', error);
      }
    );
  }
}
