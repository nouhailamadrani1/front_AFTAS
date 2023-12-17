
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
    id: 0,
    code: '',
    date: new Date(),
    startTime: { hours: 0, minutes: 0 },
    endTime: { hours: 0, minutes: 0 },
    numberOfParticipants: 0,
    location: '',
    amount: 0
  };

  constructor(
    private route: ActivatedRoute,
    private competitionService: CompetitionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCompetition();
  }

  loadCompetition(): void {
    const competitionId = +this.route.snapshot.paramMap.get('id')!;
    this.competitionService.getCompetitionById(competitionId).subscribe(
      (competition) => {
        this.competition = competition;
      },
      (error) => {
        console.error('Error loading competition:', error);
      }
    );
  }

  updateCompetition(): void {
    this.competitionService.updateCompetition(this.competition.id, this.competition).subscribe(
      (updatedCompetition) => {
        console.log('Competition updated successfully:', updatedCompetition);
        this.router.navigate(['/competitions']);
      },
      (error) => {
        console.error('Error updating competition:', error);
      }
    );
  }
}
