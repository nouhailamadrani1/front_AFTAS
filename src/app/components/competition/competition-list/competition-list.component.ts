import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { CompetitionService } from '../../../services/competition.service';
import { Competition } from '../../../models/competition.model';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {
  competitions: Competition[] = [];

  constructor(private competitionService: CompetitionService, private router: Router) { }

  ngOnInit(): void {
    this.loadCompetitions();
  }

  loadCompetitions(): void {
    this.competitionService.getAllCompetitions().subscribe(
      competitions => this.competitions = competitions,
      error => console.log(error)
    );
  }

  viewCompetition(code: number): void {
    this.router.navigate(['/competitions', code]);
    console.log(`View competition with code ${code}`);
  }

  editCompetition(code: number): void {
    this.router.navigate(['/competitions/update/', code]);
    console.log(`Edit competition with code ${code}`);
  }

  deleteCompetition(code: number): void {
    this.competitionService.deleteCompetition(code).subscribe(
      () => {
        console.log(`Competition with code ${code} deleted successfully.`);
       
        this.loadCompetitions();
      },
      (error) => {
        console.error(`Error deleting competition with code ${code}:`, error);
      }
    );
  }
  
}
