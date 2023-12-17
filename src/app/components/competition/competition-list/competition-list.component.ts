import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../../../services/competition.service';
import { Competition } from '../../../models/competition.model';
import { ToastService } from '../../../services/toast.service';
import { HuntingService } from '../../../services/hunting.service';
import { Page } from '../../../models/page.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})

export class CompetitionListComponent implements OnInit {

  competitions: Competition[] = [];
  filteredCompetitions: Competition[] = [];
  selectedStatus: string | null = null;
  currentPage = 0;
  pageSize = 3; 
  totalItems = 0;
  totalPages = 7;
  constructor(
    private competitionService: CompetitionService,
    private router: Router,
    private toastService: ToastService,
    private huntingService: HuntingService
  ) { }

  ngOnInit(): void {
    this.loadCompetitions();
  }

  showSuccessToast(): void {
    this.toastService.showSuccess(' operation successful <3.');
  }


  loadCompetitions(): void {
    this.competitionService.getAllCompetitionsPaginated(this.currentPage, this.pageSize).subscribe(
      (competitions: Page<Competition>) => {
        this.competitions = competitions.content.map((comp: Competition) => ({
          ...comp,
          status: this.getCompetitionStatus(comp.date)
        }));
        this.filteredCompetitions = this.competitions;
        this.totalItems = competitions.totalElements;
        this.totalPages = competitions.totalPages;
      },
      error => console.log(error)
    );
  }
  

  getCompetitionStatus(date: Date): string {
    const currentDate = new Date();
    const competitionDate = new Date(date);

    if (competitionDate < currentDate) {
      return 'Closed';
    } else {
      return 'Upcoming';
    }
  }

  viewCompetitionDetails(competitionId: number): void {
    this.router.navigate(['/competitions/view', competitionId]);
  }

  editCompetition(id: number): void {
    this.router.navigate(['/competitions/update/', id]);
    console.log(`Edit competition with id ${id}`);
  }

  redirectToGetRankingsByCompetition(competitionId: number): void {
    this.router.navigate(['/rankings/view', competitionId]);
    console.log(` RankingsByCompetition with id ${competitionId}`);
  }

  deleteCompetition(id: number): void {
    this.competitionService.deleteCompetition(id).subscribe(
      () => {
        console.log(`Competition deleted successfully.`);
        this.loadCompetitions();
        this.showSuccessToast();
      },
      (error) => {
        console.error(`Error deleting competition with id ${id}:`, error);
      }
    );
  }

  updateFilteredCompetitions(): void {
    if (this.selectedStatus) {
      this.filteredCompetitions = this.competitions.filter(comp => comp.status === this.selectedStatus);
    } else {
      this.filteredCompetitions = this.competitions;
    }
  }

  calculateAndAssignScores(competitionId: number): void {
    this.huntingService.calculateAndAssignScores(competitionId).subscribe(
      (response) => {
        console.log(response);
        this.showSuccessToast();
        this.loadCompetitions();
      },
      (error) => console.log(error)
    );
  }
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCompetitions();
  }
  
}
