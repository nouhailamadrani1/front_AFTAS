import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionService } from '../../../services/competition.service';
import { Competition } from '../../../models/competition.model';

@Component({
  selector: 'app-competition-update',
  templateUrl: './competition-update.component.html',
  styleUrls: ['./competition-update.component.css']
})
export class CompetitionUpdateComponent implements OnInit {
  competition: Competition = {
    code: 0,
    date: new Date(),
    startTime: { hours: 12, minutes: 0 }, 
    endTime: { hours: 14, minutes: 30 }, 
    numberOfParticipants: 0,
    location: '',
    amount: 0
  };

  constructor(
    private competitionService: CompetitionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve the competition code from the route parameters
    const code = this.route.snapshot.params['code'];
    this.loadCompetition(code);
  }

  loadCompetition(code: number): void {
    this.competitionService.getCompetitionByCode(code).subscribe(
      (competition) => {
        this.competition = competition;
      },
      (error) => {
        console.error(`Error loading competition with code ${code}:`, error);
      }
    );
  }

  updateCompetition(): void {
    this.competitionService.updateCompetition(this.competition.code, this.competition).subscribe(
      (updatedCompetition) => {
        console.log('Competition updated successfully:', updatedCompetition);
        // Redirect to the competition list or view
        this.router.navigate(['/competitions']);
      },
      (error) => {
        console.error('Error updating competition:', error);
      }
    );
  }
}
