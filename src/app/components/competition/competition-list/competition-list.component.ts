import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../../../services/competition.service';
import { Competition } from '../../../models/competition.model';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {
  competitions: Competition[] = [];
  filteredCompetitions: Competition[] = []; // Add this line
  selectedStatus: string | null = null; // Add this line

  constructor(private competitionService: CompetitionService, private router: Router) { }

  ngOnInit(): void {
    this.loadCompetitions();
  }

  loadCompetitions(): void {
    this.competitionService.getAllCompetitions().subscribe(
      competitions => {
        // Update competition status based on the current date
        this.competitions = competitions.map(comp => ({
          ...comp,
          status: this.getCompetitionStatus(comp.date)
        }));
        
        // Set the filteredCompetitions initially to all competitions
        this.filteredCompetitions = this.competitions;
      },
      error => console.log(error)
    );
  }

  getCompetitionStatus(date: Date): string {
    // Compare the competition date with the current date
    const currentDate = new Date();
    const competitionDate = new Date(date);

    if (competitionDate < currentDate) {
      return 'Closed';
    } else if (competitionDate.toDateString() === currentDate.toDateString()) {
      return 'In Progress';
    } else {
      return 'Upcoming';
    }
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

  // Add this method to update the filteredCompetitions based on the selected status
  updateFilteredCompetitions(): void {
    if (this.selectedStatus) {
      this.filteredCompetitions = this.competitions.filter(comp => comp.status === this.selectedStatus);
    } else {
      this.filteredCompetitions = this.competitions;
    }
  }
}
