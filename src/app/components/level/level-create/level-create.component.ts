import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LevelService } from '../../../services/level.service';
import { Level } from '../../../models/level.model';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-level-create',
  templateUrl: './level-create.component.html',
  styleUrls: ['./level-create.component.css']
})
export class LevelCreateComponent {
  newLevel: Level = {
    id: 0,
    code: 0,
    description: '',
    points: 0
  };
  showSuccessToast(): void {
    this.toastService.showSuccess('Registration is allowed until 24 hours before the competition start');
  }
  constructor(private levelService: LevelService, private router: Router, private toastService: ToastService) { }

  createLevel(): void {
    this.levelService.saveLevel(this.newLevel).subscribe(
      (createdLevel) => {
        console.log('Level created successfully:', createdLevel);
        this.showSuccessToast();
        this.router.navigate(['/levels']);
      },
      (error) => {
        console.error('Error creating level:', error);
      }
    );
  }
}
