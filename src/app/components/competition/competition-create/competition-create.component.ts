import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../../../services/competition.service';
import { Competition } from '../../../models/competition.model';

@Component({
  selector: 'app-competition-create',
  templateUrl: './competition-create.component.html',
  styleUrls: ['./competition-create.component.css']
})
export class CompetitionCreateComponent {
  newCompetition: Competition = {
    code:0,
    date: new Date(),
    startTime: { hours: 12, minutes: 0 }, 
    endTime: { hours: 14, minutes: 30 }, 
    numberOfParticipants: 0,
    location: '',
    amount: 0
  };

  constructor(private competitionService: CompetitionService, private router: Router) { }

  createCompetition(): void {
    this.competitionService.saveCompetition(this.newCompetition).subscribe(
      (createdCompetition) => {
        console.log('Competition created successfully:', createdCompetition);
        
        this.router.navigate(['/competitions']);
      },
      (error) => {
        console.error('Error creating competition:', error);
      }
    );
  }
}