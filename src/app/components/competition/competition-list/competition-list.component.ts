// competition-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../../../services/competition.service';
import { Competition } from '../../../models/competition.model';
import { ToastService } from '../../../services/toast.service';
@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {
  competitions: Competition[] = [];
  filteredCompetitions: Competition[] = [];
  selectedStatus: string | null = null;

  constructor(private competitionService: CompetitionService, private router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadCompetitions();
  }
  showSuccessToast(): void {
    this.toastService.showSuccess('Competition deleted successfully.');
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

  viewCompetition(id: number): void {
    this.router.navigate(['/competitions', id]);
    console.log(`View competition with id ${id}`);
  }

  editCompetition(id: number): void {
    this.router.navigate(['/competitions/update/', id]);
    console.log(`Edit competition with id ${id}`);
  }

  deleteCompetition(id: number): void {
    this.competitionService.deleteCompetition(id).subscribe(
      () => {
        console.log(`Competition  deleted successfully.`);
        this.loadCompetitions();
        this.showSuccessToast();
      },
      (error) => {
        console.error(`Error deleting competition with id ${id}:`, error);
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
