import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../../services/ranking.service';
import { Ranking } from '../../../models/ranking.model';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {
  rankings: Ranking[] = [];
  currentDateFilter: any = '';

  constructor(private rankingService: RankingService) { }

  ngOnInit(): void {
    this.loadRankings();
  }

  loadRankings(): void {
    this.rankingService.getAllRankings().subscribe(
      (rankings) => {
        this.rankings = rankings;
      },
      (error) => {
        console.error('Error loading rankings:', error);
      }
    );
  }

  filterRankingsByDate(): void {
    if (this.currentDateFilter) {
      const parsedDate = new Date(this.currentDateFilter);
      const isoDate = parsedDate.toISOString();
      this.rankingService.getRankingsByDate(this.currentDateFilter).subscribe(
        (rankings) => {
          this.rankings = rankings;
        },
        (error) => {
          console.error('Error loading rankings by date:', error);
        }
      );
    } else {
      this.loadRankings();
    }
  }

  getTopThreeRankedRankings(): Ranking[] {
    return this.rankings.slice().sort((a, b) => b.score - a.score).slice(0, 3);
  }

  getPodiumClass(index: number): string {
    switch (index) {
      case 0:
        return 'first';
      case 1:
        return 'second';
      case 2:
        return 'third';
      default:
        return '';
    }
  }
}
