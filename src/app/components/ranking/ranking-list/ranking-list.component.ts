import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../../services/ranking.service';
import { Ranking } from '../../../models/ranking.model';
import { Competition } from '../../../models/competition.model';
import { Member } from '../../../models/member.model';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {
  rankings: Ranking[] = [];

  constructor(private rankingService: RankingService) {}

  ngOnInit(): void {
    this.loadRankings();
  }

  loadRankings(): void {
    this.rankingService.getAllRankings().subscribe(
      (rankings) => {
        // Assign rankings
        this.rankings = rankings;

        // Update the rank based on the score
        this.rankings.sort((a, b) => b.score - a.score); // Sort in descending order

        for (let i = 0; i < this.rankings.length; i++) {
          this.rankings[i].rank = i + 1;
        }
      },
      (error) => {
        console.error('Error loading rankings:', error);
      }
    );
  }
}
