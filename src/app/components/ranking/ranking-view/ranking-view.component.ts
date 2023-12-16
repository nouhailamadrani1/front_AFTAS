// Inside ranking-view.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankingService } from '../../../services/ranking.service';
import { MemberService } from '../../../services/member.service';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-ranking-view',
  templateUrl: './ranking-view.component.html',
  styleUrls: ['./ranking-view.component.css']
})
export class RankingViewComponent implements OnInit {
  competitionId: number = 0;
  competitionDetails: any;
  rankings: any[] = [];
  members: any[] = [];
  selectedMember: Member | undefined;

  constructor(
    private route: ActivatedRoute,
    private rankingService: RankingService,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.competitionId = +params['id'];
      this.loadCompetitionDetails();
      this.loadRankings();
    });
  }

  loadCompetitionDetails(): void {
    if (isNaN(this.competitionId)) {
      console.error('Invalid competitionId:', this.competitionId);
      return;
    }

    this.rankingService.getAllMembersByCompetition(this.competitionId).subscribe(
      (data) => {
        console.log('Members:', data); 
        this.members = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadRankings(): void {
    if (isNaN(this.competitionId)) {
      console.error('Invalid competitionId:', this.competitionId);
      return;
    }

    this.rankingService.getRankingsByCompetition(this.competitionId).subscribe(
      (data) => {
        this.rankings = data.sort((a, b) => b.score - a.score);

        
        let currentRank = 1;
        let currentScore = this.rankings[0]?.score;

        for (const ranking of this.rankings) {
          if (ranking.score < currentScore) {
            currentRank++;
            currentScore = ranking.score;
          }

          ranking.rank = currentRank;
        }
      },
      (error) => {
        console.error(error);
      }
    );
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
